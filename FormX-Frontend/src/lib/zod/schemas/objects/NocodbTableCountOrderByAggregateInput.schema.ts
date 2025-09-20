import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tableId: SortOrderSchema.optional(),
  formId: SortOrderSchema.optional(),
  metadata: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional()
}).strict();
export const NocodbTableCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.NocodbTableCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableCountOrderByAggregateInput>;
export const NocodbTableCountOrderByAggregateInputObjectZodSchema = makeSchema();
