import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  formId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const SubmissionMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SubmissionMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionMaxOrderByAggregateInput>;
export const SubmissionMaxOrderByAggregateInputObjectZodSchema = makeSchema();
