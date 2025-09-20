import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  order: z.literal(true).optional()
}).strict();
export const FormScriptSumAggregateInputObjectSchema: z.ZodType<Prisma.FormScriptSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptSumAggregateInputType>;
export const FormScriptSumAggregateInputObjectZodSchema = makeSchema();
