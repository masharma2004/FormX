import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

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
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const AiUsageOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.AiUsageOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageOrderByWithRelationInput>;
export const AiUsageOrderByWithRelationInputObjectZodSchema = makeSchema();
