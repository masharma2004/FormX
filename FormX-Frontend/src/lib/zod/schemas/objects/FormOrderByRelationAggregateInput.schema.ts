import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const FormOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.FormOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FormOrderByRelationAggregateInput>;
export const FormOrderByRelationAggregateInputObjectZodSchema = makeSchema();
