import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutScriptsInputObjectSchema as UserCreateNestedOneWithoutScriptsInputObjectSchema } from './UserCreateNestedOneWithoutScriptsInput.schema';
import { FormScriptCreateNestedManyWithoutScriptInputObjectSchema as FormScriptCreateNestedManyWithoutScriptInputObjectSchema } from './FormScriptCreateNestedManyWithoutScriptInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutScriptsInputObjectSchema),
  formScripts: z.lazy(() => FormScriptCreateNestedManyWithoutScriptInputObjectSchema).optional()
}).strict();
export const ScriptCreateInputObjectSchema: z.ZodType<Prisma.ScriptCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptCreateInput>;
export const ScriptCreateInputObjectZodSchema = makeSchema();
