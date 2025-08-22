import { Process, Processor } from '@nestjs/bull';
import { Injectable, Logger } from '@nestjs/common';
import type { Job } from 'bull';
import { PrismaService } from '../../database/prisma.service';
import { SheetsService } from '../../sheets/sheets.service';
import { ScriptsService } from '../../scripts/scripts.service';
import { FormSchema, ScriptEvent } from '../../common/types/forms.types';
import { Prisma } from '@prisma/client';

interface SubmissionJobData {
  submissionId: string;
  formId: string;
  data: Record<string, any>;
  userId?: string;
  metadata?: {
    ipAddress?: string;
    userAgent?: string;
    submitterEmail?: string;
  };
}

interface TableJobData {
  formId: string;
  schema: FormSchema;
}

interface FormSettings {
  requireAuth?: boolean;
  allowAnonymous?: boolean;
  collectEmail?: boolean;
  oneResponsePerUser?: boolean;
}

@Processor('submissions')
@Injectable()
export class SubmissionProcessor {
  private readonly logger = new Logger(SubmissionProcessor.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly sheetsService: SheetsService,
    private readonly scriptsService: ScriptsService,
  ) { }

  @Process('process-submission')
  async handleSubmission(job: Job<SubmissionJobData>) {
    const { submissionId, formId, data, userId, metadata } = job.data;

    this.logger.log(`Processing submission ${submissionId} for form ${formId}`);

    try {
      const form = await this.prisma.form.findUnique({
        where: { id: formId },
        include: {
          scripts: {
            where: { enabled: true },
            orderBy: { order: 'asc' },
            include: { script: true },
          },
        },
      });

      if (!form) throw new Error('Form not found');

      // Parse settings
      const settings = (form.settings as FormSettings) || {};

      // Validate authentication requirements
      if (settings.requireAuth && !userId) {
        throw new Error('Authentication required');
      }

      if (settings.allowAnonymous === false && !userId) {
        throw new Error('Anonymous submissions not allowed');
      }

      // Validate email collection
      if (settings.collectEmail && !data.email && !userId) {
        throw new Error('Email is required');
      }

      // Check duplicate submission for same user
      if (settings.oneResponsePerUser && userId) {
        const existingSubmission = await this.prisma.submission.findFirst({
          where: {
            formId,
            userId,
            status: { in: ['completed', 'processing'] },
            id: { not: submissionId }, // Exclude current submission
          },
        });

        if (existingSubmission) {
          throw new Error('User has already submitted this form');
        }
      }

      let processedData: Record<string, any> = { ...data };

      // Fetch existing submissions for duplicate checking in validate scripts
      const existingSubmissions = await this.prisma.submission.findMany({
        where: {
          formId,
          status: { in: ['completed', 'processing'] },
          id: { not: submissionId }, // Exclude current submission
        },
        orderBy: { createdAt: 'desc' },
        take: 100, // Limit for performance
      });

      // Run validate scripts
      for (const fs of form.scripts.filter(
        (s) => (s.event as ScriptEvent) === ScriptEvent.VALIDATE,
      )) {
        const result = await this.scriptsService.executeScript(fs.script.code, {
          formId,
          submissionId,
          formData: processedData,
          event: 'validate',
          userId,
          existingSubmissions: existingSubmissions.map(sub => ({
            id: sub.id,
            data: sub.data,
            createdAt: sub.createdAt,
          })),
        });

        if (!result?.success) {
          throw new Error(
            `Validation failed: ${String(result?.error ?? 'Unknown error')}`,
          );
        }
      }

      // Run beforeSubmit scripts
      for (const fs of form.scripts.filter(
        (s) => (s.event as ScriptEvent) === ScriptEvent.BEFORE_SUBMIT,
      )) {
        const result = await this.scriptsService.executeScript(fs.script.code, {
          formId,
          submissionId,
          formData: processedData,
          event: 'beforeSubmit',
          userId,
        });

        if (
          result?.success &&
          result.result &&
          typeof result.result === 'object' &&
          !Array.isArray(result.result)
        ) {
          processedData = { ...processedData, ...result.result };
        }
      }

      // Update status to processing
      await this.prisma.submission.update({
        where: { id: submissionId },
        data: {
          data: processedData,
          status: 'processing',
          metadata: metadata || {},
        },
      });

      // Sync to NocoDB
      await this.sheetsService.addRowToTable(formId, processedData);

      // Update submission status to completed
      await this.prisma.submission.update({
        where: { id: submissionId },
        data: {
          data: processedData,
          status: 'completed',
          metadata: {
            ...(metadata || {}),
            processedAt: new Date().toISOString(),
          } as Prisma.JsonObject,
        },
      });

      // Run afterSubmit scripts
      for (const fs of form.scripts.filter(
        (s) => (s.event as ScriptEvent) === ScriptEvent.AFTER_SUBMIT,
      )) {
        try {
          await this.scriptsService.executeScript(fs.script.code, {
            formId,
            submissionId,
            formData: processedData,
            event: 'afterSubmit',
            user: userId ? { id: userId } : null,
          });
        } catch (error) {
          this.logger.warn(
            `afterSubmit script failed: ${String((error as Error)?.message ?? error)}`,
          );
        }
      }

      this.logger.log(`✅ Submission ${submissionId} processed successfully`);
    } catch (error) {
      this.logger.error(
        `❌ Failed to process submission ${submissionId}:`,
        error,
      );

      await this.prisma.submission.update({
        where: { id: submissionId },
        data: {
          status: 'failed',
          metadata: {
            error: String((error as Error)?.message ?? error),
            failedAt: new Date().toISOString(),
          } as Prisma.JsonObject,
        },
      });

      throw error;
    }
  }

  @Process('create-table')
  async handleCreateTable(job: Job<TableJobData>) {
    const { formId, schema } = job.data;

    try {
      await this.sheetsService.createTableForForm(formId, schema);
      this.logger.log(`✅ Created NocoDB table for form ${formId}`);
    } catch (error) {
      this.logger.error(`❌ Failed to create table for form ${formId}:`, error);
      throw error;
    }
  }

  @Process('update-table')
  async handleUpdateTable(job: Job<TableJobData>) {
    const { formId, schema } = job.data;

    try {
      await this.sheetsService.updateTableSchema(formId, schema);
      this.logger.log(`✅ Updated NocoDB table for form ${formId}`);
    } catch (error) {
      this.logger.error(`❌ Failed to update table for form ${formId}:`, error);
      throw error;
    }
  }

  @Process('delete-table')
  async handleDeleteTable(job: Job<{ formId: string }>) {
    const { formId } = job.data;

    try {
      await this.sheetsService.deleteTable(formId);
      this.logger.log(`✅ Deleted NocoDB table for form ${formId}`);
    } catch (error) {
      this.logger.error(`❌ Failed to delete table for form ${formId}:`, error);
      // Non-critical error
    }
  }
}
