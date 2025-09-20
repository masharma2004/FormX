import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  operation: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  tokensUsed: SortOrderSchema.optional(),
  cost: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const AiUsageMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AiUsageMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageMinOrderByAggregateInput>;
export const AiUsageMinOrderByAggregateInputObjectZodSchema = makeSchema();
