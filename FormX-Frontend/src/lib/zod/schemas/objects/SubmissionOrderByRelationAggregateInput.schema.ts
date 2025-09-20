import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const SubmissionOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.SubmissionOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionOrderByRelationAggregateInput>;
export const SubmissionOrderByRelationAggregateInputObjectZodSchema = makeSchema();
