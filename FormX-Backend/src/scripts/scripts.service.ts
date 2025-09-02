import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import * as vm from 'vm';

interface ScriptExecutionContext {
  formData?: Record<string, unknown>;
  submissionId?: string;
  formId?: string;
  event: string;
  user?: any;
  queryForm?: (
    formId: string,
    filters?: Record<string, unknown>,
  ) => Promise<Record<string, unknown>[]>;
  querySheet?: (
    formId: string,
    filters?: Record<string, unknown>,
  ) => Promise<Record<string, unknown>[]>;
  [key: string]: any;
}

export interface ScriptExecutionResult {
  success: boolean;
  result?: Record<string, any>;
  error?: string;
  executionTime: number;
}

@Injectable()
export class ScriptsService {
  private readonly logger = new Logger(ScriptsService.name);

  constructor(private prisma: PrismaService) { }

  async createScript(
    userId: string,
    name: string,
    code: string,
    description?: string,
  ) {
    try {
      await this.validateScript(code);

      const script = await this.prisma.script.create({
        data: {
          name,
          code,
          description,
          userId,
        },
      });

      this.logger.log(`Script ${script.id} created by user ${userId}`);
      return script;
    } catch (error) {
      this.logger.error(
        `Failed to create script for user ${userId}:`,
        error instanceof Error ? error.message : error,
      );
      throw error;
    }
  }

  async getUserScripts(userId: string) {
    return this.prisma.script.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
      include: {
        formScripts: {
          include: {
            form: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
      },
    });
  }

  async getScript(scriptId: string, userId: string) {
    const script = await this.prisma.script.findFirst({
      where: {
        id: scriptId,
        userId,
      },
      include: {
        formScripts: {
          include: {
            form: {
              select: {
                id: true,
                title: true,
              },
            },
          },
        },
      },
    });

    if (!script) {
      throw new BadRequestException('Script not found or access denied');
    }

    return script;
  }

  async updateScript(
    scriptId: string,
    userId: string,
    updates: { name?: string; code?: string; description?: string },
  ) {
    try {
      const script = await this.prisma.script.findFirst({
        where: {
          id: scriptId,
          userId,
        },
      });

      if (!script) {
        throw new BadRequestException('Script not found or access denied');
      }

      if (updates.code) {
        await this.validateScript(updates.code);
      }

      const updatedScript = await this.prisma.script.update({
        where: { id: scriptId },
        data: updates,
      });

      this.logger.log(`Script ${scriptId} updated by user ${userId}`);
      return updatedScript;
    } catch (error) {
      this.logger.error(
        `Failed to update script ${scriptId} for user ${userId}:`,
        error instanceof Error ? error.message : error,
      );
      throw error;
    }
  }

  async deleteScript(scriptId: string, userId: string) {
    try {
      const script = await this.prisma.script.findFirst({
        where: {
          id: scriptId,
          userId,
        },
      });

      if (!script) {
        throw new BadRequestException('Script not found or access denied');
      }

      await this.prisma.formScript.deleteMany({
        where: { scriptId },
      });

      await this.prisma.script.delete({
        where: { id: scriptId },
      });

      this.logger.log(`Script ${scriptId} deleted by user ${userId}`);
      return { success: true };
    } catch (error) {
      this.logger.error(
        `Failed to delete script ${scriptId} for user ${userId}:`,
        error instanceof Error ? error.message : error,
      );
      throw error;
    }
  }

  async attachScriptToForm(
    scriptId: string,
    formId: string,
    event: string,
    order = 0,
    userId: string,
  ) {
    try {
      const [script, form] = await Promise.all([
        this.prisma.script.findFirst({
          where: { id: scriptId, userId },
        }),
        this.prisma.form.findFirst({
          where: { id: formId, userId },
        }),
      ]);

      if (!script) {
        throw new BadRequestException('Script not found or access denied');
      }
      if (!form) {
        throw new BadRequestException('Form not found or access denied');
      }

      const existing = await this.prisma.formScript.findFirst({
        where: { scriptId, formId, event },
      });
      if (existing) {
        throw new BadRequestException(
          'Script already attached to form for this event',
        );
      }

      const formScript = await this.prisma.formScript.create({
        data: {
          scriptId,
          formId,
          event,
          order,
        },
      });

      this.logger.log(
        `Script ${scriptId} attached to form ${formId} for event ${event} by user ${userId}`,
      );
      return formScript;
    } catch (error) {
      this.logger.error(
        `Failed to attach script ${scriptId} to form ${formId} for event ${event} by user ${userId}:`,
        error instanceof Error ? error.message : error,
      );
      throw error;
    }
  }

  async detachScriptFromForm(
    scriptId: string,
    formId: string,
    event: string,
    userId: string,
  ) {
    try {
      const form = await this.prisma.form.findFirst({
        where: { id: formId, userId },
      });

      if (!form) {
        throw new BadRequestException('Form not found or access denied');
      }

      await this.prisma.formScript.deleteMany({
        where: { scriptId, formId, event },
      });

      this.logger.log(
        `Script ${scriptId} detached from form ${formId} for event ${event} by user ${userId}`,
      );
      return { success: true };
    } catch (error) {
      this.logger.error(
        `Failed to detach script ${scriptId} from form ${formId} for event ${event} by user ${userId}:`,
        error instanceof Error ? error.message : error,
      );
      throw error;
    }
  }

  async executeScript(
    code: string,
    context: ScriptExecutionContext = { event: 'default' },
  ): Promise<ScriptExecutionResult> {
    const startTime = Date.now();

    // Debug logging
    this.logger.log(`🚀 Executing script for event: ${context.event}`);
    this.logger.log(`📊 Context has ${(context.existingSubmissions as unknown[])?.length ?? 0} existing submissions`);
    this.logger.log(`📝 FormData keys: ${Object.keys(context.formData || {}).join(', ')}`);

    try {
      // Create utility functions
      const utils = {
        validateEmail: (email: string) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        validatePhone: (phone: string) =>
          /^[+]?[1-9][\d]{0,15}$/.test(phone.replace(/[\s\-()]/g, '')),
        validateUrl: (url: string) => {
          try {
            new URL(url);
            return true;
          } catch {
            return false;
          }
        },
      };

      // Create sandbox with safe globals
      const sandbox: vm.Context = {
        context: { ...context },
        utils,
        console: {
          log: (...args: any[]) => this.logger.log(`Script: ${args.join(' ')}`),
          error: (...args: any[]) => this.logger.error(`Script: ${args.join(' ')}`),
          warn: (...args: any[]) => this.logger.warn(`Script: ${args.join(' ')}`),
        },
        JSON,
        Date,
        Math,
        RegExp,
        String,
        Number,
        Boolean,
        Array,
        Object,
        Promise,
        result: undefined as any,
      };

      vm.createContext(sandbox);

      // Wrap user code in async IIFE
      const wrappedCode = `
        (async () => {
          try {
            ${code}
          } catch (error) {
            return { __error: error.message };
          }
        })().then(r => { result = r; });
      `;

      // Run with timeout
      const script = new vm.Script(wrappedCode);
      script.runInContext(sandbox, { timeout: 5000 });

      // Wait for async execution
      await new Promise(resolve => setTimeout(resolve, 100));

      const executionTime = Date.now() - startTime;
      const result = sandbox.result;

      if (
        result &&
        typeof result === 'object' &&
        result !== null &&
        '__error' in result &&
        typeof (result as { __error: unknown }).__error === 'string'
      ) {
        return {
          success: false,
          error: (result as { __error: string }).__error,
          executionTime,
        };
      }

      return {
        success: true,
        result,
        executionTime,
      };
    } catch (error) {
      const executionTime = Date.now() - startTime;

      this.logger.error(
        `Failed to execute script:`,
        error instanceof Error ? error.message : error,
      );

      return {
        success: false,
        error: error instanceof Error ? error.message : String(error),
        executionTime,
      };
    }
  }

  async testScript(
    scriptId: string,
    userId: string,
    testContext: ScriptExecutionContext = { event: 'test' },
  ) {
    try {
      const script = await this.prisma.script.findFirst({
        where: { id: scriptId, userId },
      });

      if (!script) {
        throw new BadRequestException('Script not found or access denied');
      }

      const result = await this.executeScript(script.code, testContext);

      this.logger.log(
        `Tested script ${scriptId} - Success: ${result.success}, Time: ${result.executionTime}ms`,
      );

      return result;
    } catch (error) {
      this.logger.error(
        `Failed to test script ${scriptId} for user ${userId}:`,
        error instanceof Error ? error.message : error,
      );
      throw error;
    }
  }

  async getFormScripts(formId: string, userId: string) {
    const form = await this.prisma.form.findFirst({
      where: { id: formId, userId },
    });

    if (!form) {
      throw new BadRequestException('Form not found or access denied');
    }

    return this.prisma.formScript.findMany({
      where: { formId },
      include: {
        script: true,
      },
      orderBy: [{ event: 'asc' }, { order: 'asc' }],
    });
  }

  getScriptTemplates() {
    return [
      {
        id: 'duplicate-name-prevention',
        name: 'Prevent Duplicate Names',
        event: 'validate',
        description:
          'Blocks submission if a previous response already used the same name.',
        code: `const name = context.formData.full_name;
if (name) {
  const duplicate = context.existingSubmissions.find(
    sub => sub.data.full_name?.toLowerCase() === name?.toLowerCase()
  );
  if (duplicate) {
    throw new Error('This name has already been submitted.');
  }
}
return true;`,
      },
      {
        id: 'email-domain-validation',
        name: 'Restrict Email Domain',
        event: 'validate',
        description: 'Only allows submissions from a specific email domain.',
        code: `const email = context.formData.email;
if (email && !email.endsWith('@company.com')) {
  throw new Error('Only company emails are allowed.');
}
return true;`,
      },
      {
        id: 'trim-and-lowercase-email',
        name: 'Normalize Email Field',
        event: 'beforeSubmit',
        description:
          'Trims whitespace and lowercases the email field before saving.',
        code: `const email = context.formData.email;
return {
  email: email ? email.trim().toLowerCase() : email,
};`,
      },
      {
        id: 'required-rating-comment',
        name: 'Require Comment for Low Ratings',
        event: 'validate',
        description:
          'Requires an explanatory comment whenever the rating is 2 stars or lower.',
        code: `const rating = Number(context.formData.rating_field);
const comment = context.formData.text_field;
if (rating > 0 && rating <= 2 && !comment) {
  throw new Error('Please tell us more when rating 2 stars or below.');
}
return true;`,
      },
    ];
  }

  private async validateScript(code: string): Promise<void> {
    try {
      // Use Node.js vm module for syntax validation
      new vm.Script(code);
    } catch (error) {
      throw new BadRequestException(
        `Script validation failed: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
}
