import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInputObjectSchema as ScriptWhereUniqueInputObjectSchema } from './ScriptWhereUniqueInput.schema';
import { ScriptUpdateWithoutUserInputObjectSchema as ScriptUpdateWithoutUserInputObjectSchema } from './ScriptUpdateWithoutUserInput.schema';
import { ScriptUncheckedUpdateWithoutUserInputObjectSchema as ScriptUncheckedUpdateWithoutUserInputObjectSchema } from './ScriptUncheckedUpdateWithoutUserInput.schema';
import { ScriptCreateWithoutUserInputObjectSchema as ScriptCreateWithoutUserInputObjectSchema } from './ScriptCreateWithoutUserInput.schema';
import { ScriptUncheckedCreateWithoutUserInputObjectSchema as ScriptUncheckedCreateWithoutUserInputObjectSchema } from './ScriptUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScriptWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ScriptUpdateWithoutUserInputObjectSchema), z.lazy(() => ScriptUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => ScriptCreateWithoutUserInputObjectSchema), z.lazy(() => ScriptUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ScriptUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ScriptUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptUpsertWithWhereUniqueWithoutUserInput>;
export const ScriptUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
