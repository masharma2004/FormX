import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  data: SortOrderSchema.optional(),
  metadata: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  formId: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional()
}).strict();
export const SubmissionCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SubmissionCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionCountOrderByAggregateInput>;
export const SubmissionCountOrderByAggregateInputObjectZodSchema = makeSchema();
