import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormCreateNestedOneWithoutScriptsInputObjectSchema as FormCreateNestedOneWithoutScriptsInputObjectSchema } from './FormCreateNestedOneWithoutScriptsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  event: z.string(),
  order: z.number().int().optional(),
  enabled: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  form: z.lazy(() => FormCreateNestedOneWithoutScriptsInputObjectSchema)
}).strict();
export const FormScriptCreateWithoutScriptInputObjectSchema: z.ZodType<Prisma.FormScriptCreateWithoutScriptInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptCreateWithoutScriptInput>;
export const FormScriptCreateWithoutScriptInputObjectZodSchema = makeSchema();
