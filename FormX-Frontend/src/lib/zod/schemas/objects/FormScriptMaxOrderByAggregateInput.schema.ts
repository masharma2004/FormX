import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  event: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  enabled: SortOrderSchema.optional(),
  formId: SortOrderSchema.optional(),
  scriptId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const FormScriptMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FormScriptMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptMaxOrderByAggregateInput>;
export const FormScriptMaxOrderByAggregateInputObjectZodSchema = makeSchema();
