import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionCreateWithoutUserInputObjectSchema as SubmissionCreateWithoutUserInputObjectSchema } from './SubmissionCreateWithoutUserInput.schema';
import { SubmissionUncheckedCreateWithoutUserInputObjectSchema as SubmissionUncheckedCreateWithoutUserInputObjectSchema } from './SubmissionUncheckedCreateWithoutUserInput.schema';
import { SubmissionCreateOrConnectWithoutUserInputObjectSchema as SubmissionCreateOrConnectWithoutUserInputObjectSchema } from './SubmissionCreateOrConnectWithoutUserInput.schema';
import { SubmissionCreateManyUserInputEnvelopeObjectSchema as SubmissionCreateManyUserInputEnvelopeObjectSchema } from './SubmissionCreateManyUserInputEnvelope.schema';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SubmissionCreateWithoutUserInputObjectSchema), z.lazy(() => SubmissionCreateWithoutUserInputObjectSchema).array(), z.lazy(() => SubmissionUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SubmissionCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => SubmissionCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SubmissionCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SubmissionWhereUniqueInputObjectSchema), z.lazy(() => SubmissionWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SubmissionUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.SubmissionUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUncheckedCreateNestedManyWithoutUserInput>;
export const SubmissionUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
