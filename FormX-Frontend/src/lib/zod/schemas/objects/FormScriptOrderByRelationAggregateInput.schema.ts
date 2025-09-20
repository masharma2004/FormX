import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const FormScriptOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.FormScriptOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptOrderByRelationAggregateInput>;
export const FormScriptOrderByRelationAggregateInputObjectZodSchema = makeSchema();
