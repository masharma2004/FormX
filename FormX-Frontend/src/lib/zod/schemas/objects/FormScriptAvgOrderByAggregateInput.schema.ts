import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  order: SortOrderSchema.optional()
}).strict();
export const FormScriptAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FormScriptAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptAvgOrderByAggregateInput>;
export const FormScriptAvgOrderByAggregateInputObjectZodSchema = makeSchema();
