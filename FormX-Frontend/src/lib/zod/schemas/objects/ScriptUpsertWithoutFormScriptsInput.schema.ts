import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptUpdateWithoutFormScriptsInputObjectSchema as ScriptUpdateWithoutFormScriptsInputObjectSchema } from './ScriptUpdateWithoutFormScriptsInput.schema';
import { ScriptUncheckedUpdateWithoutFormScriptsInputObjectSchema as ScriptUncheckedUpdateWithoutFormScriptsInputObjectSchema } from './ScriptUncheckedUpdateWithoutFormScriptsInput.schema';
import { ScriptCreateWithoutFormScriptsInputObjectSchema as ScriptCreateWithoutFormScriptsInputObjectSchema } from './ScriptCreateWithoutFormScriptsInput.schema';
import { ScriptUncheckedCreateWithoutFormScriptsInputObjectSchema as ScriptUncheckedCreateWithoutFormScriptsInputObjectSchema } from './ScriptUncheckedCreateWithoutFormScriptsInput.schema';
import { ScriptWhereInputObjectSchema as ScriptWhereInputObjectSchema } from './ScriptWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ScriptUpdateWithoutFormScriptsInputObjectSchema), z.lazy(() => ScriptUncheckedUpdateWithoutFormScriptsInputObjectSchema)]),
  create: z.union([z.lazy(() => ScriptCreateWithoutFormScriptsInputObjectSchema), z.lazy(() => ScriptUncheckedCreateWithoutFormScriptsInputObjectSchema)]),
  where: z.lazy(() => ScriptWhereInputObjectSchema).optional()
}).strict();
export const ScriptUpsertWithoutFormScriptsInputObjectSchema: z.ZodType<Prisma.ScriptUpsertWithoutFormScriptsInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptUpsertWithoutFormScriptsInput>;
export const ScriptUpsertWithoutFormScriptsInputObjectZodSchema = makeSchema();
