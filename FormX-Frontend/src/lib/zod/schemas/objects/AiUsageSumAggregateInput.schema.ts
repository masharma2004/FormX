import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  tokensUsed: z.literal(true).optional(),
  cost: z.literal(true).optional()
}).strict();
export const AiUsageSumAggregateInputObjectSchema: z.ZodType<Prisma.AiUsageSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageSumAggregateInputType>;
export const AiUsageSumAggregateInputObjectZodSchema = makeSchema();
