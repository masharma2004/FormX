import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptWhereInputObjectSchema as ScriptWhereInputObjectSchema } from './ScriptWhereInput.schema';
import { ScriptUpdateWithoutFormScriptsInputObjectSchema as ScriptUpdateWithoutFormScriptsInputObjectSchema } from './ScriptUpdateWithoutFormScriptsInput.schema';
import { ScriptUncheckedUpdateWithoutFormScriptsInputObjectSchema as ScriptUncheckedUpdateWithoutFormScriptsInputObjectSchema } from './ScriptUncheckedUpdateWithoutFormScriptsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScriptWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ScriptUpdateWithoutFormScriptsInputObjectSchema), z.lazy(() => ScriptUncheckedUpdateWithoutFormScriptsInputObjectSchema)])
}).strict();
export const ScriptUpdateToOneWithWhereWithoutFormScriptsInputObjectSchema: z.ZodType<Prisma.ScriptUpdateToOneWithWhereWithoutFormScriptsInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptUpdateToOneWithWhereWithoutFormScriptsInput>;
export const ScriptUpdateToOneWithWhereWithoutFormScriptsInputObjectZodSchema = makeSchema();
