import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptCreateWithoutUserInputObjectSchema as ScriptCreateWithoutUserInputObjectSchema } from './ScriptCreateWithoutUserInput.schema';
import { ScriptUncheckedCreateWithoutUserInputObjectSchema as ScriptUncheckedCreateWithoutUserInputObjectSchema } from './ScriptUncheckedCreateWithoutUserInput.schema';
import { ScriptCreateOrConnectWithoutUserInputObjectSchema as ScriptCreateOrConnectWithoutUserInputObjectSchema } from './ScriptCreateOrConnectWithoutUserInput.schema';
import { ScriptUpsertWithWhereUniqueWithoutUserInputObjectSchema as ScriptUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './ScriptUpsertWithWhereUniqueWithoutUserInput.schema';
import { ScriptCreateManyUserInputEnvelopeObjectSchema as ScriptCreateManyUserInputEnvelopeObjectSchema } from './ScriptCreateManyUserInputEnvelope.schema';
import { ScriptWhereUniqueInputObjectSchema as ScriptWhereUniqueInputObjectSchema } from './ScriptWhereUniqueInput.schema';
import { ScriptUpdateWithWhereUniqueWithoutUserInputObjectSchema as ScriptUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './ScriptUpdateWithWhereUniqueWithoutUserInput.schema';
import { ScriptUpdateManyWithWhereWithoutUserInputObjectSchema as ScriptUpdateManyWithWhereWithoutUserInputObjectSchema } from './ScriptUpdateManyWithWhereWithoutUserInput.schema';
import { ScriptScalarWhereInputObjectSchema as ScriptScalarWhereInputObjectSchema } from './ScriptScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ScriptCreateWithoutUserInputObjectSchema), z.lazy(() => ScriptCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ScriptUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ScriptUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ScriptCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ScriptCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ScriptUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ScriptUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ScriptCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ScriptWhereUniqueInputObjectSchema), z.lazy(() => ScriptWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ScriptWhereUniqueInputObjectSchema), z.lazy(() => ScriptWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ScriptWhereUniqueInputObjectSchema), z.lazy(() => ScriptWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ScriptWhereUniqueInputObjectSchema), z.lazy(() => ScriptWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ScriptUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => ScriptUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ScriptUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => ScriptUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ScriptScalarWhereInputObjectSchema), z.lazy(() => ScriptScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ScriptUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.ScriptUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptUncheckedUpdateManyWithoutUserNestedInput>;
export const ScriptUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
