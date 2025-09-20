import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FormOrderByRelationAggregateInputObjectSchema as FormOrderByRelationAggregateInputObjectSchema } from './FormOrderByRelationAggregateInput.schema';
import { ScriptOrderByRelationAggregateInputObjectSchema as ScriptOrderByRelationAggregateInputObjectSchema } from './ScriptOrderByRelationAggregateInput.schema';
import { AiUsageOrderByRelationAggregateInputObjectSchema as AiUsageOrderByRelationAggregateInputObjectSchema } from './AiUsageOrderByRelationAggregateInput.schema';
import { SubmissionOrderByRelationAggregateInputObjectSchema as SubmissionOrderByRelationAggregateInputObjectSchema } from './SubmissionOrderByRelationAggregateInput.schema';
import { PasswordResetTokenOrderByRelationAggregateInputObjectSchema as PasswordResetTokenOrderByRelationAggregateInputObjectSchema } from './PasswordResetTokenOrderByRelationAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  email: SortOrderSchema.optional(),
  password: SortOrderSchema.optional(),
  name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  settings: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  forms: z.lazy(() => FormOrderByRelationAggregateInputObjectSchema).optional(),
  scripts: z.lazy(() => ScriptOrderByRelationAggregateInputObjectSchema).optional(),
  aiUsage: z.lazy(() => AiUsageOrderByRelationAggregateInputObjectSchema).optional(),
  submissions: z.lazy(() => SubmissionOrderByRelationAggregateInputObjectSchema).optional(),
  passwordResetTokens: z.lazy(() => PasswordResetTokenOrderByRelationAggregateInputObjectSchema).optional()
}).strict();
export const UserOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserOrderByWithRelationInput>;
export const UserOrderByWithRelationInputObjectZodSchema = makeSchema();
