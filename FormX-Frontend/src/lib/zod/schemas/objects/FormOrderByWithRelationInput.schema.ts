import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';
import { SubmissionOrderByRelationAggregateInputObjectSchema as SubmissionOrderByRelationAggregateInputObjectSchema } from './SubmissionOrderByRelationAggregateInput.schema';
import { FormScriptOrderByRelationAggregateInputObjectSchema as FormScriptOrderByRelationAggregateInputObjectSchema } from './FormScriptOrderByRelationAggregateInput.schema';
import { NocodbTableOrderByWithRelationInputObjectSchema as NocodbTableOrderByWithRelationInputObjectSchema } from './NocodbTableOrderByWithRelationInput.schema'

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
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
  submissions: z.lazy(() => SubmissionOrderByRelationAggregateInputObjectSchema).optional(),
  scripts: z.lazy(() => FormScriptOrderByRelationAggregateInputObjectSchema).optional(),
  nocodbTable: z.lazy(() => NocodbTableOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const FormOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.FormOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.FormOrderByWithRelationInput>;
export const FormOrderByWithRelationInputObjectZodSchema = makeSchema();
