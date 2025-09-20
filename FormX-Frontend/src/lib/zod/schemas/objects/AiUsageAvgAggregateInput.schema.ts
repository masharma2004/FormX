import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tokensUsed: z.literal(true).optional(),
  cost: z.literal(true).optional()
}).strict();
export const AiUsageAvgAggregateInputObjectSchema: z.ZodType<Prisma.AiUsageAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageAvgAggregateInputType>;
export const AiUsageAvgAggregateInputObjectZodSchema = makeSchema();
