import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SubmissionCountOrderByAggregateInputObjectSchema as SubmissionCountOrderByAggregateInputObjectSchema } from './SubmissionCountOrderByAggregateInput.schema';
import { SubmissionMaxOrderByAggregateInputObjectSchema as SubmissionMaxOrderByAggregateInputObjectSchema } from './SubmissionMaxOrderByAggregateInput.schema';
import { SubmissionMinOrderByAggregateInputObjectSchema as SubmissionMinOrderByAggregateInputObjectSchema } from './SubmissionMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  data: SortOrderSchema.optional(),
  metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  status: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  formId: SortOrderSchema.optional(),
  userId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => SubmissionCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SubmissionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SubmissionMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SubmissionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SubmissionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionOrderByWithAggregationInput>;
export const SubmissionOrderByWithAggregationInputObjectZodSchema = makeSchema();
