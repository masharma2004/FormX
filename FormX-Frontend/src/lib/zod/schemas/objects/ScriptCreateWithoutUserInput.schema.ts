import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptCreateNestedManyWithoutScriptInputObjectSchema as FormScriptCreateNestedManyWithoutScriptInputObjectSchema } from './FormScriptCreateNestedManyWithoutScriptInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  formScripts: z.lazy(() => FormScriptCreateNestedManyWithoutScriptInputObjectSchema).optional()
}).strict();
export const ScriptCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ScriptCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptCreateWithoutUserInput>;
export const ScriptCreateWithoutUserInputObjectZodSchema = makeSchema();
