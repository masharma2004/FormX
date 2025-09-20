import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tableId: SortOrderSchema.optional(),
  formId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const NocodbTableMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NocodbTableMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableMinOrderByAggregateInput>;
export const NocodbTableMinOrderByAggregateInputObjectZodSchema = makeSchema();
