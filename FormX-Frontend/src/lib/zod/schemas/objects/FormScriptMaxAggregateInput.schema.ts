import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  event: z.literal(true).optional(),
  order: z.literal(true).optional(),
  enabled: z.literal(true).optional(),
  formId: z.literal(true).optional(),
  scriptId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const FormScriptMaxAggregateInputObjectSchema: z.ZodType<Prisma.FormScriptMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptMaxAggregateInputType>;
export const FormScriptMaxAggregateInputObjectZodSchema = makeSchema();
