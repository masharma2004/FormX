import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ScriptOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ScriptOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptOrderByRelationAggregateInput>;
export const ScriptOrderByRelationAggregateInputObjectZodSchema = makeSchema();
