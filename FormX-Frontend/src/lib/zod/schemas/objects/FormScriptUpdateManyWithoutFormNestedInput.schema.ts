import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptCreateWithoutFormInputObjectSchema as FormScriptCreateWithoutFormInputObjectSchema } from './FormScriptCreateWithoutFormInput.schema';
import { FormScriptUncheckedCreateWithoutFormInputObjectSchema as FormScriptUncheckedCreateWithoutFormInputObjectSchema } from './FormScriptUncheckedCreateWithoutFormInput.schema';
import { FormScriptCreateOrConnectWithoutFormInputObjectSchema as FormScriptCreateOrConnectWithoutFormInputObjectSchema } from './FormScriptCreateOrConnectWithoutFormInput.schema';
import { FormScriptUpsertWithWhereUniqueWithoutFormInputObjectSchema as FormScriptUpsertWithWhereUniqueWithoutFormInputObjectSchema } from './FormScriptUpsertWithWhereUniqueWithoutFormInput.schema';
import { FormScriptCreateManyFormInputEnvelopeObjectSchema as FormScriptCreateManyFormInputEnvelopeObjectSchema } from './FormScriptCreateManyFormInputEnvelope.schema';
import { FormScriptWhereUniqueInputObjectSchema as FormScriptWhereUniqueInputObjectSchema } from './FormScriptWhereUniqueInput.schema';
import { FormScriptUpdateWithWhereUniqueWithoutFormInputObjectSchema as FormScriptUpdateWithWhereUniqueWithoutFormInputObjectSchema } from './FormScriptUpdateWithWhereUniqueWithoutFormInput.schema';
import { FormScriptUpdateManyWithWhereWithoutFormInputObjectSchema as FormScriptUpdateManyWithWhereWithoutFormInputObjectSchema } from './FormScriptUpdateManyWithWhereWithoutFormInput.schema';
import { FormScriptScalarWhereInputObjectSchema as FormScriptScalarWhereInputObjectSchema } from './FormScriptScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FormScriptCreateWithoutFormInputObjectSchema), z.lazy(() => FormScriptCreateWithoutFormInputObjectSchema).array(), z.lazy(() => FormScriptUncheckedCreateWithoutFormInputObjectSchema), z.lazy(() => FormScriptUncheckedCreateWithoutFormInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FormScriptCreateOrConnectWithoutFormInputObjectSchema), z.lazy(() => FormScriptCreateOrConnectWithoutFormInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FormScriptUpsertWithWhereUniqueWithoutFormInputObjectSchema), z.lazy(() => FormScriptUpsertWithWhereUniqueWithoutFormInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FormScriptCreateManyFormInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FormScriptWhereUniqueInputObjectSchema), z.lazy(() => FormScriptWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FormScriptWhereUniqueInputObjectSchema), z.lazy(() => FormScriptWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FormScriptWhereUniqueInputObjectSchema), z.lazy(() => FormScriptWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FormScriptWhereUniqueInputObjectSchema), z.lazy(() => FormScriptWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FormScriptUpdateWithWhereUniqueWithoutFormInputObjectSchema), z.lazy(() => FormScriptUpdateWithWhereUniqueWithoutFormInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FormScriptUpdateManyWithWhereWithoutFormInputObjectSchema), z.lazy(() => FormScriptUpdateManyWithWhereWithoutFormInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FormScriptScalarWhereInputObjectSchema), z.lazy(() => FormScriptScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FormScriptUpdateManyWithoutFormNestedInputObjectSchema: z.ZodType<Prisma.FormScriptUpdateManyWithoutFormNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptUpdateManyWithoutFormNestedInput>;
export const FormScriptUpdateManyWithoutFormNestedInputObjectZodSchema = makeSchema();
