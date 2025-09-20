import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { NocodbTableCountOrderByAggregateInputObjectSchema as NocodbTableCountOrderByAggregateInputObjectSchema } from './NocodbTableCountOrderByAggregateInput.schema';
import { NocodbTableMaxOrderByAggregateInputObjectSchema as NocodbTableMaxOrderByAggregateInputObjectSchema } from './NocodbTableMaxOrderByAggregateInput.schema';
import { NocodbTableMinOrderByAggregateInputObjectSchema as NocodbTableMinOrderByAggregateInputObjectSchema } from './NocodbTableMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tableId: SortOrderSchema.optional(),
  formId: SortOrderSchema.optional(),
  metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => NocodbTableCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => NocodbTableMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => NocodbTableMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const NocodbTableOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.NocodbTableOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableOrderByWithAggregationInput>;
export const NocodbTableOrderByWithAggregationInputObjectZodSchema = makeSchema();
