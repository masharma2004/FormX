import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  schema: SortOrderSchema.optional(),
  settings: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const FormCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FormCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FormCountOrderByAggregateInput>;
export const FormCountOrderByAggregateInputObjectZodSchema = makeSchema();
