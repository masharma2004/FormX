import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tableId: SortOrderSchema.optional(),
  formId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const NocodbTableMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NocodbTableMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableMaxOrderByAggregateInput>;
export const NocodbTableMaxOrderByAggregateInputObjectZodSchema = makeSchema();
