import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptCreateWithoutFormScriptsInputObjectSchema as ScriptCreateWithoutFormScriptsInputObjectSchema } from './ScriptCreateWithoutFormScriptsInput.schema';
import { ScriptUncheckedCreateWithoutFormScriptsInputObjectSchema as ScriptUncheckedCreateWithoutFormScriptsInputObjectSchema } from './ScriptUncheckedCreateWithoutFormScriptsInput.schema';
import { ScriptCreateOrConnectWithoutFormScriptsInputObjectSchema as ScriptCreateOrConnectWithoutFormScriptsInputObjectSchema } from './ScriptCreateOrConnectWithoutFormScriptsInput.schema';
import { ScriptWhereUniqueInputObjectSchema as ScriptWhereUniqueInputObjectSchema } from './ScriptWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ScriptCreateWithoutFormScriptsInputObjectSchema), z.lazy(() => ScriptUncheckedCreateWithoutFormScriptsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ScriptCreateOrConnectWithoutFormScriptsInputObjectSchema).optional(),
  connect: z.lazy(() => ScriptWhereUniqueInputObjectSchema).optional()
}).strict();
export const ScriptCreateNestedOneWithoutFormScriptsInputObjectSchema: z.ZodType<Prisma.ScriptCreateNestedOneWithoutFormScriptsInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptCreateNestedOneWithoutFormScriptsInput>;
export const ScriptCreateNestedOneWithoutFormScriptsInputObjectZodSchema = makeSchema();
