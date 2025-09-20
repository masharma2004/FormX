import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptCreateNestedOneWithoutFormScriptsInputObjectSchema as ScriptCreateNestedOneWithoutFormScriptsInputObjectSchema } from './ScriptCreateNestedOneWithoutFormScriptsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  event: z.string(),
  order: z.number().int().optional(),
  enabled: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  script: z.lazy(() => ScriptCreateNestedOneWithoutFormScriptsInputObjectSchema)
}).strict();
export const FormScriptCreateWithoutFormInputObjectSchema: z.ZodType<Prisma.FormScriptCreateWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptCreateWithoutFormInput>;
export const FormScriptCreateWithoutFormInputObjectZodSchema = makeSchema();
