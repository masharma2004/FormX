import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  order: z.literal(true).optional()
}).strict();
export const FormScriptAvgAggregateInputObjectSchema: z.ZodType<Prisma.FormScriptAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptAvgAggregateInputType>;
export const FormScriptAvgAggregateInputObjectZodSchema = makeSchema();
