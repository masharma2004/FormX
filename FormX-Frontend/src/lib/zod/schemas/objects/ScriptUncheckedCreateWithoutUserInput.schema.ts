import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptUncheckedCreateNestedManyWithoutScriptInputObjectSchema as FormScriptUncheckedCreateNestedManyWithoutScriptInputObjectSchema } from './FormScriptUncheckedCreateNestedManyWithoutScriptInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  formScripts: z.lazy(() => FormScriptUncheckedCreateNestedManyWithoutScriptInputObjectSchema).optional()
}).strict();
export const ScriptUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.ScriptUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptUncheckedCreateWithoutUserInput>;
export const ScriptUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
