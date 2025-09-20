import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormCreateWithoutUserInputObjectSchema as FormCreateWithoutUserInputObjectSchema } from './FormCreateWithoutUserInput.schema';
import { FormUncheckedCreateWithoutUserInputObjectSchema as FormUncheckedCreateWithoutUserInputObjectSchema } from './FormUncheckedCreateWithoutUserInput.schema';
import { FormCreateOrConnectWithoutUserInputObjectSchema as FormCreateOrConnectWithoutUserInputObjectSchema } from './FormCreateOrConnectWithoutUserInput.schema';
import { FormUpsertWithWhereUniqueWithoutUserInputObjectSchema as FormUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './FormUpsertWithWhereUniqueWithoutUserInput.schema';
import { FormCreateManyUserInputEnvelopeObjectSchema as FormCreateManyUserInputEnvelopeObjectSchema } from './FormCreateManyUserInputEnvelope.schema';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './FormWhereUniqueInput.schema';
import { FormUpdateWithWhereUniqueWithoutUserInputObjectSchema as FormUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './FormUpdateWithWhereUniqueWithoutUserInput.schema';
import { FormUpdateManyWithWhereWithoutUserInputObjectSchema as FormUpdateManyWithWhereWithoutUserInputObjectSchema } from './FormUpdateManyWithWhereWithoutUserInput.schema';
import { FormScalarWhereInputObjectSchema as FormScalarWhereInputObjectSchema } from './FormScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FormCreateWithoutUserInputObjectSchema), z.lazy(() => FormCreateWithoutUserInputObjectSchema).array(), z.lazy(() => FormUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => FormUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FormCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => FormCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => FormUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => FormUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FormCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => FormWhereUniqueInputObjectSchema), z.lazy(() => FormWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => FormWhereUniqueInputObjectSchema), z.lazy(() => FormWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => FormWhereUniqueInputObjectSchema), z.lazy(() => FormWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => FormWhereUniqueInputObjectSchema), z.lazy(() => FormWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => FormUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => FormUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => FormUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => FormUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => FormScalarWhereInputObjectSchema), z.lazy(() => FormScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const FormUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.FormUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FormUncheckedUpdateManyWithoutUserNestedInput>;
export const FormUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
