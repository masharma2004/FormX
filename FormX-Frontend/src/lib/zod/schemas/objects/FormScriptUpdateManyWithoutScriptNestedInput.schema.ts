import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptCreateWithoutScriptInputObjectSchema as FormScriptCreateWithoutScriptInputObjectSchema } from './FormScriptCreateWithoutScriptInput.schema';
import { FormScriptUncheckedCreateWithoutScriptInputObjectSchema as FormScriptUncheckedCreateWithoutScriptInputObjectSchema } from './FormScriptUncheckedCreateWithoutScriptInput.schema';
import { FormScriptCreateOrConnectWithoutScriptInputObjectSchema as FormScriptCreateOrConnectWithoutScriptInputObjectSchema } from './FormScriptCreateOrConnectWithoutScriptInput.schema';
import { FormScriptUpsertWithWhereUniqueWithoutScriptInputObjectSchema as FormScriptUpsertWithWhereUniqueWithoutScriptInputObjectSchema } from './FormScriptUpsertWithWhereUniqueWithoutScriptInput.schema';
import { FormScriptCreateManyScriptInputEnvelopeObjectSchema as FormScriptCreateManyScriptInputEnvelopeObjectSchema } from './FormScriptCreateManyScriptInputEnvelope.schema';
import { FormScriptWhereUniqueInputObjectSchema as FormScriptWhereUniqueInputObjectSchema } from './FormScriptWhereUniqueInput.schema';
import { FormScriptUpdateWithWhereUniqueWithoutScriptInputObjectSchema as FormScriptUpdateWithWhereUniqueWithoutScriptInputObjectSchema } from './FormScriptUpdateWithWhereUniqueWithoutScriptInput.schema';
import { FormScriptUpdateManyWithWhereWithoutScriptInputObjectSchema as FormScriptUpdateManyWithWhereWithoutScriptInputObjectSchema } from './FormScriptUpdateManyWithWhereWithoutScriptInput.schema';
import { FormScriptScalarWhereInputObjectSchema as FormScriptScalarWhereInputObjectSchema } from './FormScriptScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FormScriptCreateWithoutScriptInputObjectSchema), z.lazy(() => FormScriptCreateWithoutScriptInputObjectSchema).array(), z.lazy(() => FormScriptUncheckedCreateWithoutScriptInputObjectSchema), z.lazy(() => FormScriptUncheckedCreateWithoutScriptInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FormScriptCreateOrConnectWithoutScriptInputObjectSchema), z.lazy(() => FormScriptCreateOrConnectWithoutScriptInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FormScriptUpsertWithWhereUniqueWithoutScriptInputObjectSchema), z.lazy(() => FormScriptUpsertWithWhereUniqueWithoutScriptInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FormScriptCreateManyScriptInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FormScriptWhereUniqueInputObjectSchema), z.lazy(() => FormScriptWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FormScriptWhereUniqueInputObjectSchema), z.lazy(() => FormScriptWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FormScriptWhereUniqueInputObjectSchema), z.lazy(() => FormScriptWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FormScriptWhereUniqueInputObjectSchema), z.lazy(() => FormScriptWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FormScriptUpdateWithWhereUniqueWithoutScriptInputObjectSchema), z.lazy(() => FormScriptUpdateWithWhereUniqueWithoutScriptInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FormScriptUpdateManyWithWhereWithoutScriptInputObjectSchema), z.lazy(() => FormScriptUpdateManyWithWhereWithoutScriptInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FormScriptScalarWhereInputObjectSchema), z.lazy(() => FormScriptScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FormScriptUpdateManyWithoutScriptNestedInputObjectSchema: z.ZodType<Prisma.FormScriptUpdateManyWithoutScriptNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptUpdateManyWithoutScriptNestedInput>;
export const FormScriptUpdateManyWithoutScriptNestedInputObjectZodSchema = makeSchema();
