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
export const FormScriptCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FormScriptCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptCountOrderByAggregateInput>;
export const FormScriptCountOrderByAggregateInputObjectZodSchema = makeSchema();
