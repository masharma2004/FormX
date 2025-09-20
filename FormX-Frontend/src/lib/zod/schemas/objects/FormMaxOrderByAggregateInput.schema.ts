import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: SortOrderSchema.optional(),
  isActive: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const FormMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FormMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FormMaxOrderByAggregateInput>;
export const FormMaxOrderByAggregateInputObjectZodSchema = makeSchema();
