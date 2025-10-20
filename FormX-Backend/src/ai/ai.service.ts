import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai';
import { PrismaService } from '../database/prisma.service';

export interface GenerateScriptRequest {
  prompt: string;
  formSchema?: Record<string, unknown>;
  userId?: string;
}

export interface GenerateScriptResponse {
  code: string;
  name: string;
  description: string;
  model: string;
  tokensUsed: number;
}

@Injectable()
export class AiService {
  private readonly logger = new Logger(AiService.name);
  private genAI?: GoogleGenerativeAI;
  private model?: GenerativeModel;

  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) {
    const apiKey = this.configService.get<string>('GEMINI_AI_API_KEY');
    if (!apiKey) {
      this.logger.warn('⚠️  GEMINI_AI_API_KEY not set - AI features disabled');
      return;
    }

    try {
      this.genAI = new GoogleGenerativeAI(apiKey);
      this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      this.logger.log('✅ Google AI initialized (gemini-1.5-flash)');
    } catch (error) {
      this.logger.error(
        `Failed to initialize Google AI: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  async generateScript(
    request: GenerateScriptRequest,
  ): Promise<GenerateScriptResponse> {
    if (!this.model) {
      this.logger.warn('AI not available, using fallback template');
      return this.generateFallbackScript(request);
    }

    const systemPrompt = `You are an expert JavaScript developer creating validation and automation scripts for form submissions.

**Context:**
- Scripts run in an isolated V8 sandbox (5 second limit, 32 MB memory) as the body of an async function
- Available APIs (this is the complete list, nothing else exists):
  * context.formData - Current submission data object (keyed by field name)
  * context.formId - Form ID string
  * context.event - Event type ('validate' | 'beforeSubmit' | 'afterSubmit')
  * context.userId - ID of the logged-in submitter, undefined for anonymous submissions
  * context.existingSubmissions - validate scripts only: the last 100 previous submissions as [{ id, data, createdAt }]
  * utils.validateEmail(email) - Validate email format (returns boolean)
  * utils.validatePhone(phone) - Validate phone format (returns boolean)
  * utils.validateUrl(url) - Validate URL format (returns boolean)
  * console.log / console.warn / console.error - Write to the server log
  * Standard JavaScript built-ins (JSON, Date, Math, RegExp, Array, Object, ...)
- NOT available: require, import, process, fetch, setTimeout, database or network access, and any queries.* helpers

**Rules:**
1. For validation scripts: throw new Error('message') to reject submission, or return false; return true to accept
2. For beforeSubmit scripts: return an object with the fields to change (it is merged into the data)
3. For afterSubmit scripts: return value ignored (there are no side-effect APIs)
4. To check against earlier submissions use context.existingSubmissions, not a query
5. Keep code simple, readable, and well-commented
6. Handle edge cases (null, undefined, empty values)
7. Use descriptive error messages

**Response Format (JSON only, no markdown):**
{
  "code": "// JavaScript code here",
  "name": "Script Name (max 50 chars)",
  "description": "Brief description (max 200 chars)"
}`;

    const userPrompt = `Generate a script for: ${request.prompt}

${request.formSchema ? `Form Schema:\n${JSON.stringify(request.formSchema, null, 2)}` : ''}

Return ONLY valid JSON with code, name, and description fields. No markdown, no explanation.`;

    try {
      const result = await this.model.generateContent([
        systemPrompt,
        userPrompt,
      ]);

      const response = result.response;
      let text = response.text().trim();

      // Extract JSON from markdown code blocks if present
      if (text.startsWith('```json')) {
        text = text.replace(/```json\s*/g, '').replace(/```\s*$/g, '');
      } else if (text.startsWith('```')) {
        text = text.replace(/```\s*/g, '').replace(/```\s*$/g, '');
      }

      // Parse JSON
      const parsed = JSON.parse(text) as {
        code?: string;
        name?: string;
        description?: string;
      };

      // Get token usage
      const tokensUsed = response.usageMetadata?.totalTokenCount || 0;

      // Track usage
      if (request.userId) {
        await this.trackUsage(
          request.userId,
          'generateScript',
          'gemini-1.5-flash',
          tokensUsed,
        );
      }

      return {
        code: parsed.code || '',
        name: (parsed.name || 'AI Generated Script').slice(0, 50),
        description: (parsed.description || '').slice(0, 200),
        model: 'gemini-1.5-flash',
        tokensUsed,
      };
    } catch (error) {
      this.logger.error(
        `AI generation failed: ${error instanceof Error ? error.message : String(error)}`,
      );

      // Fallback to template
      return this.generateFallbackScript(request);
    }
  }

  private generateFallbackScript(
    request: GenerateScriptRequest,
  ): GenerateScriptResponse {
    const prompt = request.prompt.toLowerCase();

    if (prompt.includes('duplicate') && prompt.includes('email')) {
      return {
        name: 'Duplicate Email Check',
        description: 'Prevents duplicate email submissions',
        code: `// Check for duplicate email
const email = context.formData.email;
if (!email) {
  throw new Error('Email is required');
}

// Check previous submissions (the last 100 are available)
const usedEmails = context.existingSubmissions.map(s => s.data.email);

if (usedEmails.includes(email)) {
  throw new Error('This email has already been registered. Please use a different email.');
}

return true;`,
        model: 'fallback-template',
        tokensUsed: 0,
      };
    }

    if (prompt.includes('whitelist') || prompt.includes('approved')) {
      return {
        name: 'Whitelist Validation',
        description: 'Validates against approved list',
        code: `// Validate against approved list
const value = context.formData.YOUR_FIELD; // Replace YOUR_FIELD with actual field name

if (!value) {
  throw new Error('Field is required');
}

// Scripts cannot query other forms, so keep the approved values here
const approvedValues = ['value-one', 'value-two']; // Replace with your approved values

if (!approvedValues.includes(value)) {
  throw new Error(\`Value "\${value}" is not in the approved list\`);
}

return true;`,
        model: 'fallback-template',
        tokensUsed: 0,
      };
    }

    if (prompt.includes('capacity') || prompt.includes('limit')) {
      return {
        name: 'Capacity Check',
        description: 'Limits number of submissions',
        code: `// Check submission capacity
const maxCapacity = 100; // Change this value

// Only the last 100 previous submissions are visible to a script
const currentCount = context.existingSubmissions.length;

if (currentCount >= maxCapacity) {
  throw new Error(\`Sorry, registration is full. Capacity: \${maxCapacity}\`);
}

return true;`,
        model: 'fallback-template',
        tokensUsed: 0,
      };
    }

    // Default template
    return {
      name: 'Custom Validation Script',
      description: request.prompt.slice(0, 100) || 'Custom validation logic',
      code: `// Custom validation script
// Description: ${request.prompt}

const data = context.formData;

// Add your validation logic here
if (!data.someField) {
  throw new Error('Validation failed: someField is required');
}

return true;`,
      model: 'fallback-template',
      tokensUsed: 0,
    };
  }

  private async trackUsage(
    userId: string,
    operation: string,
    model: string,
    tokensUsed: number,
  ): Promise<void> {
    try {
      const cost = (tokensUsed / 1000000) * 1.25;

      await this.prisma.aiUsage.create({
        data: {
          userId,
          operation,
          model,
          date: new Date(),
          tokensUsed,
          cost,
        },
      });

      this.logger.log(
        `✅ Tracked AI usage: ${operation} (${tokensUsed} tokens, $${cost.toFixed(6)})`,
      );
    } catch (error) {
      this.logger.error(
        `Failed to track AI usage for user ${userId}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  /**
   * Check if AI is available
   */
  isAvailable(): boolean {
    return !!this.model;
  }

  async getUserUsageStats(userId: string, days: number = 30) {
    try {
      const since = new Date();
      since.setDate(since.getDate() - days);

      const usage = await this.prisma.aiUsage.findMany({
        where: {
          userId,
          date: {
            gte: since,
          },
        },
        orderBy: {
          date: 'desc',
        },
      });

      const totalTokens = usage.reduce((sum, u) => sum + u.tokensUsed, 0);
      const totalCost = usage.reduce((sum, u) => sum + (u.cost ?? 0), 0);

      return {
        count: usage.length,
        totalTokens,
        totalCost,
        usage,
      };
    } catch (error) {
      this.logger.error(
        `Failed to get usage stats: ${error instanceof Error ? error.message : String(error)}`,
      );
      throw error;
    }
  }
}
