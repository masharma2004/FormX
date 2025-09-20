import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInputObjectSchema as ScriptWhereUniqueInputObjectSchema } from './ScriptWhereUniqueInput.schema';
import { ScriptCreateWithoutFormScriptsInputObjectSchema as ScriptCreateWithoutFormScriptsInputObjectSchema } from './ScriptCreateWithoutFormScriptsInput.schema';
import { ScriptUncheckedCreateWithoutFormScriptsInputObjectSchema as ScriptUncheckedCreateWithoutFormScriptsInputObjectSchema } from './ScriptUncheckedCreateWithoutFormScriptsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScriptWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ScriptCreateWithoutFormScriptsInputObjectSchema), z.lazy(() => ScriptUncheckedCreateWithoutFormScriptsInputObjectSchema)])
}).strict();
export const ScriptCreateOrConnectWithoutFormScriptsInputObjectSchema: z.ZodType<Prisma.ScriptCreateOrConnectWithoutFormScriptsInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptCreateOrConnectWithoutFormScriptsInput>;
export const ScriptCreateOrConnectWithoutFormScriptsInputObjectZodSchema = makeSchema();
