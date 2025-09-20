import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  operation: z.literal(true).optional(),
  model: z.literal(true).optional(),
  date: z.literal(true).optional(),
  tokensUsed: z.literal(true).optional(),
  cost: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const AiUsageMinAggregateInputObjectSchema: z.ZodType<Prisma.AiUsageMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageMinAggregateInputType>;
export const AiUsageMinAggregateInputObjectZodSchema = makeSchema();
