import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { FormScriptOrderByRelationAggregateInputObjectSchema as FormScriptOrderByRelationAggregateInputObjectSchema } from './FormScriptOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  code: SortOrderSchema.optional(),
  description: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  formScripts: z.lazy(() => FormScriptOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const ScriptOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ScriptOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptOrderByWithRelationInput>;
export const ScriptOrderByWithRelationInputObjectZodSchema = makeSchema();
