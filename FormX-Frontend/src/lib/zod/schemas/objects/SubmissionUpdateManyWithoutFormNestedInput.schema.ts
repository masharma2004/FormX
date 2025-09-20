import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionCreateWithoutFormInputObjectSchema as SubmissionCreateWithoutFormInputObjectSchema } from './SubmissionCreateWithoutFormInput.schema';
import { SubmissionUncheckedCreateWithoutFormInputObjectSchema as SubmissionUncheckedCreateWithoutFormInputObjectSchema } from './SubmissionUncheckedCreateWithoutFormInput.schema';
import { SubmissionCreateOrConnectWithoutFormInputObjectSchema as SubmissionCreateOrConnectWithoutFormInputObjectSchema } from './SubmissionCreateOrConnectWithoutFormInput.schema';
import { SubmissionUpsertWithWhereUniqueWithoutFormInputObjectSchema as SubmissionUpsertWithWhereUniqueWithoutFormInputObjectSchema } from './SubmissionUpsertWithWhereUniqueWithoutFormInput.schema';
import { SubmissionCreateManyFormInputEnvelopeObjectSchema as SubmissionCreateManyFormInputEnvelopeObjectSchema } from './SubmissionCreateManyFormInputEnvelope.schema';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionUpdateWithWhereUniqueWithoutFormInputObjectSchema as SubmissionUpdateWithWhereUniqueWithoutFormInputObjectSchema } from './SubmissionUpdateWithWhereUniqueWithoutFormInput.schema';
import { SubmissionUpdateManyWithWhereWithoutFormInputObjectSchema as SubmissionUpdateManyWithWhereWithoutFormInputObjectSchema } from './SubmissionUpdateManyWithWhereWithoutFormInput.schema';
import { SubmissionScalarWhereInputObjectSchema as SubmissionScalarWhereInputObjectSchema } from './SubmissionScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubmissionCreateWithoutFormInputObjectSchema), z.lazy(() => SubmissionCreateWithoutFormInputObjectSchema).array(), z.lazy(() => SubmissionUncheckedCreateWithoutFormInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutFormInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SubmissionCreateOrConnectWithoutFormInputObjectSchema), z.lazy(() => SubmissionCreateOrConnectWithoutFormInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SubmissionUpsertWithWhereUniqueWithoutFormInputObjectSchema), z.lazy(() => SubmissionUpsertWithWhereUniqueWithoutFormInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SubmissionCreateManyFormInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SubmissionUpdateWithWhereUniqueWithoutFormInputObjectSchema), z.lazy(() => SubmissionUpdateWithWhereUniqueWithoutFormInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SubmissionUpdateManyWithWhereWithoutFormInputObjectSchema), z.lazy(() => SubmissionUpdateManyWithWhereWithoutFormInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SubmissionScalarWhereInputObjectSchema), z.lazy(() => SubmissionScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SubmissionUpdateManyWithoutFormNestedInputObjectSchema: z.ZodType<Prisma.SubmissionUpdateManyWithoutFormNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpdateManyWithoutFormNestedInput>;
export const SubmissionUpdateManyWithoutFormNestedInputObjectZodSchema = makeSchema();
