import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  event: z.string(),
  order: z.number().int().optional(),
  enabled: z.boolean().optional(),
  formId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const FormScriptCreateManyScriptInputObjectSchema: z.ZodType<Prisma.FormScriptCreateManyScriptInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptCreateManyScriptInput>;
export const FormScriptCreateManyScriptInputObjectZodSchema = makeSchema();
