import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormCreateNestedOneWithoutScriptsInputObjectSchema as FormCreateNestedOneWithoutScriptsInputObjectSchema } from './FormCreateNestedOneWithoutScriptsInput.schema';
import { ScriptCreateNestedOneWithoutFormScriptsInputObjectSchema as ScriptCreateNestedOneWithoutFormScriptsInputObjectSchema } from './ScriptCreateNestedOneWithoutFormScriptsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  event: z.string(),
  order: z.number().int().optional(),
  enabled: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  form: z.lazy(() => FormCreateNestedOneWithoutScriptsInputObjectSchema),
  script: z.lazy(() => ScriptCreateNestedOneWithoutFormScriptsInputObjectSchema)
}).strict();
export const FormScriptCreateInputObjectSchema: z.ZodType<Prisma.FormScriptCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptCreateInput>;
export const FormScriptCreateInputObjectZodSchema = makeSchema();
