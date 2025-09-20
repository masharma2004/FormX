import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ScriptCountOrderByAggregateInputObjectSchema as ScriptCountOrderByAggregateInputObjectSchema } from './ScriptCountOrderByAggregateInput.schema';
import { ScriptMaxOrderByAggregateInputObjectSchema as ScriptMaxOrderByAggregateInputObjectSchema } from './ScriptMaxOrderByAggregateInput.schema';
import { ScriptMinOrderByAggregateInputObjectSchema as ScriptMinOrderByAggregateInputObjectSchema } from './ScriptMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => ScriptCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ScriptMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ScriptMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ScriptOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ScriptOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptOrderByWithAggregationInput>;
export const ScriptOrderByWithAggregationInputObjectZodSchema = makeSchema();
