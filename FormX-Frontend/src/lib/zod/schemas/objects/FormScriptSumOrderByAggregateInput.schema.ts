import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  order: SortOrderSchema.optional()
}).strict();
export const FormScriptSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FormScriptSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptSumOrderByAggregateInput>;
export const FormScriptSumOrderByAggregateInputObjectZodSchema = makeSchema();
