import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AiUsageCountOrderByAggregateInputObjectSchema as AiUsageCountOrderByAggregateInputObjectSchema } from './AiUsageCountOrderByAggregateInput.schema';
import { AiUsageAvgOrderByAggregateInputObjectSchema as AiUsageAvgOrderByAggregateInputObjectSchema } from './AiUsageAvgOrderByAggregateInput.schema';
import { AiUsageMaxOrderByAggregateInputObjectSchema as AiUsageMaxOrderByAggregateInputObjectSchema } from './AiUsageMaxOrderByAggregateInput.schema';
import { AiUsageMinOrderByAggregateInputObjectSchema as AiUsageMinOrderByAggregateInputObjectSchema } from './AiUsageMinOrderByAggregateInput.schema';
import { AiUsageSumOrderByAggregateInputObjectSchema as AiUsageSumOrderByAggregateInputObjectSchema } from './AiUsageSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  operation: SortOrderSchema.optional(),
  model: SortOrderSchema.optional(),
  date: SortOrderSchema.optional(),
  tokensUsed: SortOrderSchema.optional(),
  cost: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => AiUsageCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AiUsageAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AiUsageMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AiUsageMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AiUsageSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AiUsageOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AiUsageOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageOrderByWithAggregationInput>;
export const AiUsageOrderByWithAggregationInputObjectZodSchema = makeSchema();
