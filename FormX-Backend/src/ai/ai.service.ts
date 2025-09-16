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
- Scripts run in a sandboxed vm environment
- Available APIs:
  * context.formData - Current submission data object
  * context.formId - Form ID string
  * context.event - Event type ('validate' | 'beforeSubmit' | 'afterSubmit')
  * queries.queryForm(formId, filters?) - Query form submissions (returns Promise<Array>)
  * queries.querySheet(formId, filters?) - Query spreadsheet data (returns Promise<Array>)
  * utils.validateEmail(email) - Validate email format (returns boolean)
  * utils.validatePhone(phone) - Validate phone format (returns boolean)
  * utils.now() - Get current ISO timestamp (returns string)

**Rules:**
1. For validation scripts: throw new Error('message') to reject submission
2. For beforeSubmit scripts: return modified formData object
3. For afterSubmit scripts: perform side effects, return value ignored
4. Always use async/await for queries
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

// Query existing submissions
const existingSubmissions = await queries.queryForm(context.formId);
const usedEmails = existingSubmissions.map(s => s.email);

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

// Query approved list from another form
const approvedList = await queries.querySheet('YOUR_FORM_ID'); // Replace YOUR_FORM_ID
const approvedValues = approvedList.map(row => row.YOUR_COLUMN); // Replace YOUR_COLUMN

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

const submissions = await queries.queryForm(context.formId);
const currentCount = submissions.length;

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
