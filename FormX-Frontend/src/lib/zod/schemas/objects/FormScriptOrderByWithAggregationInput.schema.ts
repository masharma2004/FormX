import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FormScriptCountOrderByAggregateInputObjectSchema as FormScriptCountOrderByAggregateInputObjectSchema } from './FormScriptCountOrderByAggregateInput.schema';
import { FormScriptAvgOrderByAggregateInputObjectSchema as FormScriptAvgOrderByAggregateInputObjectSchema } from './FormScriptAvgOrderByAggregateInput.schema';
import { FormScriptMaxOrderByAggregateInputObjectSchema as FormScriptMaxOrderByAggregateInputObjectSchema } from './FormScriptMaxOrderByAggregateInput.schema';
import { FormScriptMinOrderByAggregateInputObjectSchema as FormScriptMinOrderByAggregateInputObjectSchema } from './FormScriptMinOrderByAggregateInput.schema';
import { FormScriptSumOrderByAggregateInputObjectSchema as FormScriptSumOrderByAggregateInputObjectSchema } from './FormScriptSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  event: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  enabled: SortOrderSchema.optional(),
  formId: SortOrderSchema.optional(),
  scriptId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => FormScriptCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => FormScriptAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FormScriptMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FormScriptMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => FormScriptSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FormScriptOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FormScriptOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptOrderByWithAggregationInput>;
export const FormScriptOrderByWithAggregationInputObjectZodSchema = makeSchema();
