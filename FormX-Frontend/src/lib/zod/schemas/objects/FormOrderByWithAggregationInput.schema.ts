import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FormCountOrderByAggregateInputObjectSchema as FormCountOrderByAggregateInputObjectSchema } from './FormCountOrderByAggregateInput.schema';
import { FormMaxOrderByAggregateInputObjectSchema as FormMaxOrderByAggregateInputObjectSchema } from './FormMaxOrderByAggregateInput.schema';
import { FormMinOrderByAggregateInputObjectSchema as FormMinOrderByAggregateInputObjectSchema } from './FormMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  schema: SortOrderSchema.optional(),
  settings: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  isActive: SortOrderSchema.optional(),
  isPublic: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => FormCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FormMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FormMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FormOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FormOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FormOrderByWithAggregationInput>;
export const FormOrderByWithAggregationInputObjectZodSchema = makeSchema();
