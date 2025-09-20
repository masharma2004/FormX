import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutScriptsInputObjectSchema as UserCreateNestedOneWithoutScriptsInputObjectSchema } from './UserCreateNestedOneWithoutScriptsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutScriptsInputObjectSchema)
}).strict();
export const ScriptCreateWithoutFormScriptsInputObjectSchema: z.ZodType<Prisma.ScriptCreateWithoutFormScriptsInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptCreateWithoutFormScriptsInput>;
export const ScriptCreateWithoutFormScriptsInputObjectZodSchema = makeSchema();
