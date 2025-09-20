import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const ScriptMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ScriptMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptMinOrderByAggregateInput>;
export const ScriptMinOrderByAggregateInputObjectZodSchema = makeSchema();
