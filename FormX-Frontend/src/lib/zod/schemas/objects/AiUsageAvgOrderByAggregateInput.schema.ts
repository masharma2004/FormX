import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  tokensUsed: SortOrderSchema.optional(),
  cost: SortOrderSchema.optional()
}).strict();
export const AiUsageAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AiUsageAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageAvgOrderByAggregateInput>;
export const AiUsageAvgOrderByAggregateInputObjectZodSchema = makeSchema();
