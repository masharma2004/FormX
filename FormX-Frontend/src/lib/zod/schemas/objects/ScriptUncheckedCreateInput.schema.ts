import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptUncheckedCreateNestedManyWithoutScriptInputObjectSchema as FormScriptUncheckedCreateNestedManyWithoutScriptInputObjectSchema } from './FormScriptUncheckedCreateNestedManyWithoutScriptInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  formScripts: z.lazy(() => FormScriptUncheckedCreateNestedManyWithoutScriptInputObjectSchema).optional()
}).strict();
export const ScriptUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ScriptUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptUncheckedCreateInput>;
export const ScriptUncheckedCreateInputObjectZodSchema = makeSchema();
