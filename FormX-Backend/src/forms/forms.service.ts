import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateFormDto, UpdateFormDto, SubmitFormDto } from './dto/form.dto';
import { FieldType, FormSchema } from '../common/types/forms.types';
import { InjectQueue } from '@nestjs/bull';
import type { Queue } from 'bull';
import { Prisma, User } from '@prisma/client';
import { ScriptsService } from '../scripts/scripts.service';
import { CacheService } from '../common/cache/cache.service';

const FORM_TTL_SECONDS = 60;
const FORM_LIST_TTL_SECONDS = 30;

@Injectable()
export class FormsService {
  constructor(
    private prisma: PrismaService,
    @InjectQueue('submissions') private submissionsQueue: Queue,
    private scriptsService: ScriptsService,
    private cache: CacheService,
  ) { }

  async createForm(userId: string, createFormDto: CreateFormDto) {
    const form = await this.prisma.form.create({
      data: {
        title: createFormDto.title,
        description: createFormDto.description,
        schema: createFormDto.schema satisfies FormSchema as Prisma.JsonObject,
        settings: (createFormDto.settings ?? {}) as Prisma.JsonObject,
        isPublic: createFormDto.isPublic || false,
        isActive: createFormDto.isActive ?? true,
        userId,
      },
      include: {
        user: {
          select: {
            id: true,
            email: true,
            name: true,
          },
        },
      },
    });

    // Queue job to create NocoDB table
    await this.submissionsQueue
      .add('create-table', {
        formId: form.id,
        schema: form.schema,
      })
      .catch((err: Error) => console.error(`Queue failed: ${err.message}`));

    await this.cache.bumpVersion(`forms:user:${userId}`);

    return form;
  }

  async findAll(
    userId: string,
    options: { includeInactive?: boolean; page?: number; limit?: number } = {},
  ) {
    const { includeInactive = false, page = 1, limit = 10 } = options;

    return this.prisma.form.findMany({
      where: {
        userId,
        ...(includeInactive ? {} : { isActive: true }),
      },
      include: {
        _count: {
          select: { submissions: true },
        },
      },
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async findOne(id: string, user?: User) {
    const form = await this.cache.wrap(`form:${id}`, FORM_TTL_SECONDS, () =>
      this.prisma.form.findUnique({
        where: { id },
        include: {
          user: {
            select: {
              id: true,
              email: true,
              name: true,
            },
          },
          _count: {
            select: {
              submissions: true,
            },
          },
        },
      }),
    );

    if (!form) {
      throw new NotFoundException('Form not found');
    }

    // Check access permissions
    if (!form.isPublic && (!user || form.userId !== user.id)) {
      throw new ForbiddenException('Access denied');
    }

    return form;
  }

  async updateForm(id: string, userId: string, updateFormDto: UpdateFormDto) {
    const form = await this.prisma.form.findUnique({
      where: { id },
    });

    if (!form) {
      throw new NotFoundException('Form not found');
    }

    if (form.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }

    // Only include fields that are actually provided (not undefined)
    // This prevents overwriting existing data with empty defaults
    const updateData: Record<string, unknown> = {};

    if (updateFormDto.title !== undefined) {
      updateData.title = updateFormDto.title;
    }
    if (updateFormDto.description !== undefined) {
      updateData.description = updateFormDto.description;
    }
    if (updateFormDto.schema !== undefined) {
      updateData.schema = updateFormDto.schema as Prisma.JsonObject;
    }
    if (updateFormDto.settings !== undefined) {
      updateData.settings = updateFormDto.settings as Prisma.JsonObject;
    }
    if (updateFormDto.isPublic !== undefined) {
      updateData.isPublic = updateFormDto.isPublic;
    }
    if (updateFormDto.isActive !== undefined) {
      updateData.isActive = updateFormDto.isActive;
    }

    const updated = await this.prisma.form.update({
      where: { id },
      data: updateData,
    });

    // Only update NocoDB table when form is published (isActive = true)
    // This prevents unnecessary NocoDB calls on draft saves
    if (updateFormDto.schema && updateFormDto.isActive === true) {
      await this.submissionsQueue.add('update-table', {
        formId: form.id,
        schema: updateFormDto.schema as FormSchema,
      });
    }

    await this.cache.del(`form:${id}`);
    await this.cache.bumpVersion(`forms:user:${userId}`);

    return updated;
  }

  async delete(id: string, userId: string) {
    const form = await this.prisma.form.findUnique({
      where: { id },
    });

    if (!form) {
      throw new NotFoundException('Form not found');
    }

    if (form.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }

    // Delete related records first (cascade delete)
    await this.prisma.submission.deleteMany({
      where: { formId: id },
    });

    await this.prisma.formScript.deleteMany({
      where: { formId: id },
    });

    await this.prisma.nocodbTable.deleteMany({
      where: { formId: id },
    });

    // Now delete the form
    await this.prisma.form.delete({
      where: { id },
    });

    // Queue job to delete NocoDB table
    await this.submissionsQueue.add('delete-table', {
      formId: form.id,
    });

    await this.cache.del(`form:${id}`);
    await this.cache.bumpVersion(`forms:user:${userId}`);

    return { message: 'Form deleted successfully' };
  }

  async deleteSubmission(formId: string, submissionId: string, userId: string) {
    const form = await this.prisma.form.findFirst({
      where: { id: formId, userId },
    });

    if (!form) {
      throw new NotFoundException('Form not found');
    }

    const submission = await this.prisma.submission.findFirst({
      where: { id: submissionId, formId },
    });

    if (!submission) {
      throw new NotFoundException('Submission not found');
    }

    await this.prisma.submission.delete({
      where: { id: submissionId },
    });

    await this.cache.del(`form:${formId}`);
    await this.cache.bumpVersion(`forms:user:${userId}`);

    return { message: 'Submission deleted successfully' };
  }

  async submitForm(
    formId: string,
    submitFormDto: SubmitFormDto,
    user: User | undefined,
    options: { ip: string; userAgent: string },
    userId?: string,
  ) {
    const form = await this.prisma.form.findUnique({
      where: { id: formId },
      include: {
        scripts: {
          where: {
            event: { in: ['validate', 'beforeSubmit'] },
            enabled: true
          },
          orderBy: { order: 'asc' },
          include: { script: true },
        },
      },
    });

    if (!form) {
      throw new NotFoundException('Form not found');
    }

    if (!form.isActive) {
      throw new BadRequestException('Form is not accepting submissions');
    }

    if (!form.isPublic && !user) {
      throw new ForbiddenException('Authentication required');
    }

    // Validate submission against schema
    this.validateSubmission(submitFormDto.data, form.schema as FormSchema);

    // Run validation scripts SYNCHRONOUSLY before creating submission
    // This allows scripts to block duplicates, etc.
    const validateScripts = form.scripts?.filter(s => s.event === 'validate') || [];

    if (validateScripts.length > 0) {
      // Fetch existing submissions for duplicate checking
      const existingSubmissions = await this.prisma.submission.findMany({
        where: {
          formId,
          status: { in: ['completed', 'processing', 'pending'] },
        },
        orderBy: { createdAt: 'desc' },
        take: 100,
      });

      // Helper: Transform data from field IDs to friendly field names
      const schema = form.schema as FormSchema;
      const transformToFriendlyNames = (data: Record<string, unknown>): Record<string, unknown> => {
        const result: Record<string, unknown> = {};
        for (const field of schema.fields || []) {
          // Map field.id to field.name (e.g., "field_123_abc" -> "full_name")
          const value = data[field.id] ?? data[field.name];
          if (value !== undefined) {
            result[field.name] = value;  // Use friendly name as key
            result[field.id] = value;    // Also keep original ID for backwards compatibility
          }
        }
        return result;
      };

      // Transform formData to use friendly names
      const friendlyFormData = transformToFriendlyNames(submitFormDto.data);

      // Transform existing submissions data to use friendly names
      const friendlyExistingSubmissions = existingSubmissions.map(sub => ({
        id: sub.id,
        data: transformToFriendlyNames(sub.data as Record<string, unknown>),
        createdAt: sub.createdAt,
      }));

      for (const fs of validateScripts) {
        const result = await this.scriptsService.executeScript(fs.script.code, {
          formId,
          formData: friendlyFormData,
          event: 'validate',
          userId: user?.id,
          existingSubmissions: friendlyExistingSubmissions,
        });

        // A validate script that returns false rejects the submission, same as a throw
        if (!result?.success || result.result === false) {
          throw new BadRequestException(
            `Validation failed: ${String(result?.error ?? (result?.success ? 'Validation script returned false' : 'Unknown error'))}`,
          );
        }
      }
    }

    // Run beforeSubmit scripts SYNCHRONOUSLY to allow data transformation
    let processedData: Record<string, unknown> = { ...submitFormDto.data };
    const beforeSubmitScripts = form.scripts?.filter(s => s.event === 'beforeSubmit') || [];

    for (const fs of beforeSubmitScripts) {
      const result = await this.scriptsService.executeScript(fs.script.code, {
        formId,
        formData: processedData,
        event: 'beforeSubmit',
        userId: user?.id,
      });

      // If script returns modified data, merge it
      if (
        result?.success &&
        result.result &&
        typeof result.result === 'object' &&
        !Array.isArray(result.result)
      ) {
        processedData = { ...processedData, ...result.result };
      }
    }

    // Create submission with processed data
    const submission = await this.prisma.submission.create({
      data: {
        formId,
        data: processedData as Prisma.JsonObject,
        metadata: {
          ...submitFormDto.metadata,
          submittedBy: user?.id || 'anonymous',
          submittedAt: new Date().toISOString(),
          ip: options?.ip,
          userAgent: options?.userAgent,
          ...(userId && { userId }),
        },
        status: 'pending',
      },
    });

    // Queue processing job
    await this.submissionsQueue.add('process-submission', {
      submissionId: submission.id,
      formId: form.id,
      data: submitFormDto.data,
      userId: user?.id,
    });

    await this.cache.del(`form:${formId}`);
    await this.cache.bumpVersion(`forms:user:${form.userId}`);

    return {
      id: submission.id,
      message:
        typeof form.settings === 'object' &&
          !Array.isArray(form.settings) &&
          typeof form.settings?.submitMessage === 'string'
          ? form.settings.submitMessage
          : 'Form submitted successfully',
    };
  }

  async getSubmissions(
    formId: string,
    userId: string,
    options: { page?: number; limit?: number } = {},
  ) {
    const { page = 1, limit = 10 } = options;

    const form = await this.prisma.form.findUnique({
      where: { id: formId },
    });

    if (!form) {
      throw new NotFoundException('Form not found');
    }

    if (form.userId !== userId) {
      throw new ForbiddenException('Access denied');
    }

    const [submissions, total] = await Promise.all([
      this.prisma.submission.findMany({
        where: { formId },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      this.prisma.submission.count({ where: { formId } }),
    ]);

    return {
      submissions,
      total,
      totalPages: Math.ceil(total / limit),
      page,
      limit,
    };
  }

  private validateSubmission(data: Record<string, any>, schema: FormSchema) {
    const errors: string[] = [];

    for (const field of schema.fields) {
      // Check by field.id first (frontend uses field.id as key), fallback to field.name
      const value = (data[field.id] ?? data[field.name]) as unknown;

      // Check required fields
      if (
        field.required &&
        (value === undefined || value === null || value === '')
      ) {
        errors.push(`${field.label} is required`);
        continue;
      }

      // Skip validation for optional empty fields
      if (
        !field.required &&
        (value === undefined || value === null || value === '')
      ) {
        continue;
      }

      // Type-specific validation
      switch (field.type) {
        case FieldType.EMAIL:
          if (
            typeof value !== 'string' ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ) {
            errors.push(`${field.label} must be a valid email`);
          }
          break;

        case FieldType.NUMBER:
          if (isNaN(Number(value))) {
            errors.push(`${field.label} must be a number`);
          } else {
            const num = Number(value);
            if (
              field.validation?.min !== undefined &&
              num < field.validation.min
            ) {
              errors.push(
                `${field.label} must be at least ${field.validation.min}`,
              );
            }
            if (
              field.validation?.max !== undefined &&
              num > field.validation.max
            ) {
              errors.push(
                `${field.label} must be at most ${field.validation.max}`,
              );
            }
          }
          break;

        case FieldType.SELECT:
        case FieldType.RADIO:
          if (
            field.options &&
            !field.options.find((opt) => opt.value === value)
          ) {
            errors.push(`${field.label} has an invalid value`);
          }
          break;

        case FieldType.MULTISELECT:
        case FieldType.CHECKBOX:
          if (!Array.isArray(value)) {
            errors.push(`${field.label} must be an array`);
          } else if (field.options) {
            const validValues = field.options.map((opt) => opt.value);
            const invalidValues = value.filter(
              (v): v is string =>
                typeof v === 'string' && !validValues.includes(v),
            );
            if (invalidValues.length > 0) {
              errors.push(`${field.label} contains invalid values`);
            }
          }
          break;
      }

      // Custom pattern validation
      if (field.validation?.pattern) {
        const regex = new RegExp(field.validation.pattern);
        if (!regex.test(String(value))) {
          errors.push(field.validation.message || `${field.label} is invalid`);
        }
      }
    }

    if (errors.length > 0) {
      throw new BadRequestException({
        message: 'Validation failed',
        errors,
      });
    }
  }

  async getSubmissionCount(formId: string, userId: string) {
    const form = await this.prisma.form.findFirst({
      where: { id: formId, userId },
    });

    if (!form) {
      throw new NotFoundException('Form not found');
    }
    const count = await this.prisma.submission.count({
      where: { formId },
    });

    return { count };
  }

  async exportSubmissionsToCsv(formId: string, userId: string): Promise<string> {
    const form = await this.prisma.form.findFirst({
      where: { id: formId, userId },
    });

    if (!form) {
      throw new NotFoundException('Form not found');
    }

    const submissions = await this.prisma.submission.findMany({
      where: { formId },
      orderBy: { createdAt: 'desc' },
    });

    if (submissions.length === 0) {
      return 'No submissions found';
    }

    // Get field info from schema
    const schema = form.schema as { fields?: Array<{ id: string; name: string; label: string }> };
    const fields = schema?.fields || [];

    // Build CSV header
    const headers = ['Submitted At', ...fields.map(f => f.label || f.name)];

    // Build CSV rows
    const rows = submissions.map(sub => {
      const data = sub.data as Record<string, unknown>;
      const values = [
        new Date(sub.createdAt).toISOString(),
        ...fields.map(f => {
          // Try field.id first (frontend stores data with field.id), fallback to field.name
          const val = data[f.id] ?? data[f.name];
          if (val === null || val === undefined) return '';
          if (Array.isArray(val)) return val.join('; ');
          return String(val).replace(/"/g, '""'); // Escape quotes
        }),
      ];
      return values.map(v => `"${v}"`).join(',');
    });

    return [headers.map(h => `"${h}"`).join(','), ...rows].join('\n');
  }

  /**
   * Returns submissions in a "unified" shape (answers/values/namedValues),
   * similar to what a Google-Forms-style consumer expects.
   */
  async getUnifiedSubmissions(formId: string, userId: string) {
    const form = await this.prisma.form.findFirst({
      where: { id: formId, userId },
    });

    if (!form) {
      throw new NotFoundException('Form not found');
    }

    const submissions = await this.prisma.submission.findMany({
      where: { formId },
      orderBy: { createdAt: 'desc' },
    });

    return submissions.map((sub) => {
      const answers = (sub.data as Record<string, unknown>) || {};
      return {
        answers,
        values: Object.values(answers),
        namedValues: answers,
        id: sub.id,
        submittedAt: sub.createdAt.toISOString(),
        formId: sub.formId,
      };
    });
  }

  /**
   * Query submissions with simple equality filtering, limit/offset and sort.
   * Mirrors the shape of getUnifiedSubmissions above.
   */
  async querySubmissions(
    formId: string,
    userId: string,
    query: { where?: Record<string, unknown>; limit?: number; offset?: number; sort?: string } = {},
  ) {
    const form = await this.prisma.form.findFirst({
      where: { id: formId, userId },
    });

    if (!form) {
      throw new NotFoundException('Form not found');
    }

    const { where = {}, limit = 100, offset = 0, sort } = query;

    let submissions = await this.prisma.submission.findMany({
      where: { formId },
      orderBy: { createdAt: 'desc' },
    });

    // Simple client-side equality filter over the submission's JSON data.
    const whereEntries = Object.entries(where);
    if (whereEntries.length > 0) {
      submissions = submissions.filter((sub) => {
        const data = (sub.data as Record<string, unknown>) || {};
        return whereEntries.every(([key, value]) => data[key] === value);
      });
    }

    if (sort) {
      const desc = sort.startsWith('-');
      const field = desc ? sort.slice(1) : sort;
      submissions = [...submissions].sort((a, b) => {
        const aVal =
          field === 'submitted_at' || field === 'submittedAt'
            ? a.createdAt.getTime()
            : ((a.data as Record<string, unknown>)?.[field] as any);
        const bVal =
          field === 'submitted_at' || field === 'submittedAt'
            ? b.createdAt.getTime()
            : ((b.data as Record<string, unknown>)?.[field] as any);
        if (aVal === bVal) return 0;
        const cmp = aVal > bVal ? 1 : -1;
        return desc ? -cmp : cmp;
      });
    }

    const paged = submissions.slice(offset, offset + limit);

    return paged.map((sub) => {
      const answers = (sub.data as Record<string, unknown>) || {};
      return {
        answers,
        values: Object.values(answers),
        namedValues: answers,
        id: sub.id,
        submittedAt: sub.createdAt.toISOString(),
        formId: sub.formId,
      };
    });
  }

  async getUserForms(
    userId: string,
    page = 1,
    limit = 10,
    includeInactive = false,
  ) {
    // Versioned key: writes bump `version:forms:user:{userId}` instead of scanning/deleting
    // every page/limit/filter combination that might be cached for this user.
    const version = await this.cache.getVersion(`forms:user:${userId}`);
    const cacheKey = `forms:user:${userId}:v${version}:p${page}:l${limit}:i${includeInactive}`;

    return this.cache.wrap(cacheKey, FORM_LIST_TTL_SECONDS, async () => {
      const offset = (page - 1) * limit;
      const [forms, total] = await Promise.all([
        this.prisma.form.findMany({
          where: { userId, ...(includeInactive ? {} : { isActive: true }) },
          skip: offset,
          take: limit,
          orderBy: { createdAt: 'desc' },
          select: {
            id: true,
            title: true,
            description: true,
            schema: true, // Include schema so frontend can count fields
            isActive: true,
            isPublic: true,
            createdAt: true,
            updatedAt: true,
            _count: {
              select: { submissions: true },
            },
          },
        }),
        this.prisma.form.count({ where: { userId } }),
      ]);

      return {
        data: forms,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      };
    });
  }

  async getMySubmissions(userId: string, formId?: string) {
    return this.prisma.submission.findMany({
      where: {
        userId,
        ...(formId && { formId }),
      },
      include: {
        form: {
          select: {
            id: true,
            title: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
  }
}
