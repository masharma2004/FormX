import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  event: z.string(),
  order: z.number().int().optional(),
  enabled: z.boolean().optional(),
  formId: z.string(),
  scriptId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const FormScriptUncheckedCreateInputObjectSchema: z.ZodType<Prisma.FormScriptUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptUncheckedCreateInput>;
export const FormScriptUncheckedCreateInputObjectZodSchema = makeSchema();
