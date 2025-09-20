import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptCreateWithoutFormScriptsInputObjectSchema as ScriptCreateWithoutFormScriptsInputObjectSchema } from './ScriptCreateWithoutFormScriptsInput.schema';
import { ScriptUncheckedCreateWithoutFormScriptsInputObjectSchema as ScriptUncheckedCreateWithoutFormScriptsInputObjectSchema } from './ScriptUncheckedCreateWithoutFormScriptsInput.schema';
import { ScriptCreateOrConnectWithoutFormScriptsInputObjectSchema as ScriptCreateOrConnectWithoutFormScriptsInputObjectSchema } from './ScriptCreateOrConnectWithoutFormScriptsInput.schema';
import { ScriptUpsertWithoutFormScriptsInputObjectSchema as ScriptUpsertWithoutFormScriptsInputObjectSchema } from './ScriptUpsertWithoutFormScriptsInput.schema';
import { ScriptWhereUniqueInputObjectSchema as ScriptWhereUniqueInputObjectSchema } from './ScriptWhereUniqueInput.schema';
import { ScriptUpdateToOneWithWhereWithoutFormScriptsInputObjectSchema as ScriptUpdateToOneWithWhereWithoutFormScriptsInputObjectSchema } from './ScriptUpdateToOneWithWhereWithoutFormScriptsInput.schema';
import { ScriptUpdateWithoutFormScriptsInputObjectSchema as ScriptUpdateWithoutFormScriptsInputObjectSchema } from './ScriptUpdateWithoutFormScriptsInput.schema';
import { ScriptUncheckedUpdateWithoutFormScriptsInputObjectSchema as ScriptUncheckedUpdateWithoutFormScriptsInputObjectSchema } from './ScriptUncheckedUpdateWithoutFormScriptsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ScriptCreateWithoutFormScriptsInputObjectSchema), z.lazy(() => ScriptUncheckedCreateWithoutFormScriptsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ScriptCreateOrConnectWithoutFormScriptsInputObjectSchema).optional(),
  upsert: z.lazy(() => ScriptUpsertWithoutFormScriptsInputObjectSchema).optional(),
  connect: z.lazy(() => ScriptWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ScriptUpdateToOneWithWhereWithoutFormScriptsInputObjectSchema), z.lazy(() => ScriptUpdateWithoutFormScriptsInputObjectSchema), z.lazy(() => ScriptUncheckedUpdateWithoutFormScriptsInputObjectSchema)]).optional()
}).strict();
export const ScriptUpdateOneRequiredWithoutFormScriptsNestedInputObjectSchema: z.ZodType<Prisma.ScriptUpdateOneRequiredWithoutFormScriptsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptUpdateOneRequiredWithoutFormScriptsNestedInput>;
export const ScriptUpdateOneRequiredWithoutFormScriptsNestedInputObjectZodSchema = makeSchema();
