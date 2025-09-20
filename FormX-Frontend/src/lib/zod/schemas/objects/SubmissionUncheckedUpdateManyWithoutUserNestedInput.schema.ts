import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionCreateWithoutUserInputObjectSchema as SubmissionCreateWithoutUserInputObjectSchema } from './SubmissionCreateWithoutUserInput.schema';
import { SubmissionUncheckedCreateWithoutUserInputObjectSchema as SubmissionUncheckedCreateWithoutUserInputObjectSchema } from './SubmissionUncheckedCreateWithoutUserInput.schema';
import { SubmissionCreateOrConnectWithoutUserInputObjectSchema as SubmissionCreateOrConnectWithoutUserInputObjectSchema } from './SubmissionCreateOrConnectWithoutUserInput.schema';
import { SubmissionUpsertWithWhereUniqueWithoutUserInputObjectSchema as SubmissionUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './SubmissionUpsertWithWhereUniqueWithoutUserInput.schema';
import { SubmissionCreateManyUserInputEnvelopeObjectSchema as SubmissionCreateManyUserInputEnvelopeObjectSchema } from './SubmissionCreateManyUserInputEnvelope.schema';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionUpdateWithWhereUniqueWithoutUserInputObjectSchema as SubmissionUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './SubmissionUpdateWithWhereUniqueWithoutUserInput.schema';
import { SubmissionUpdateManyWithWhereWithoutUserInputObjectSchema as SubmissionUpdateManyWithWhereWithoutUserInputObjectSchema } from './SubmissionUpdateManyWithWhereWithoutUserInput.schema';
import { SubmissionScalarWhereInputObjectSchema as SubmissionScalarWhereInputObjectSchema } from './SubmissionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubmissionCreateWithoutUserInputObjectSchema), z.lazy(() => SubmissionCreateWithoutUserInputObjectSchema).array(), z.lazy(() => SubmissionUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SubmissionCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => SubmissionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SubmissionUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => SubmissionUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SubmissionCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SubmissionUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => SubmissionUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SubmissionUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => SubmissionUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SubmissionScalarWhereInputObjectSchema), z.lazy(() => SubmissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SubmissionUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.SubmissionUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUncheckedUpdateManyWithoutUserNestedInput>;
export const SubmissionUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
