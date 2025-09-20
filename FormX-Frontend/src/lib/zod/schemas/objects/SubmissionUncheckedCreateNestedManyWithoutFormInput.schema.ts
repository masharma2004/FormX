import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionCreateWithoutFormInputObjectSchema as SubmissionCreateWithoutFormInputObjectSchema } from './SubmissionCreateWithoutFormInput.schema';
import { SubmissionUncheckedCreateWithoutFormInputObjectSchema as SubmissionUncheckedCreateWithoutFormInputObjectSchema } from './SubmissionUncheckedCreateWithoutFormInput.schema';
import { SubmissionCreateOrConnectWithoutFormInputObjectSchema as SubmissionCreateOrConnectWithoutFormInputObjectSchema } from './SubmissionCreateOrConnectWithoutFormInput.schema';
import { SubmissionCreateManyFormInputEnvelopeObjectSchema as SubmissionCreateManyFormInputEnvelopeObjectSchema } from './SubmissionCreateManyFormInputEnvelope.schema';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubmissionCreateWithoutFormInputObjectSchema), z.lazy(() => SubmissionCreateWithoutFormInputObjectSchema).array(), z.lazy(() => SubmissionUncheckedCreateWithoutFormInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutFormInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SubmissionCreateOrConnectWithoutFormInputObjectSchema), z.lazy(() => SubmissionCreateOrConnectWithoutFormInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SubmissionCreateManyFormInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SubmissionUncheckedCreateNestedManyWithoutFormInputObjectSchema: z.ZodType<Prisma.SubmissionUncheckedCreateNestedManyWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUncheckedCreateNestedManyWithoutFormInput>;
export const SubmissionUncheckedCreateNestedManyWithoutFormInputObjectZodSchema = makeSchema();
