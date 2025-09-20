import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionCreateWithoutUserInputObjectSchema as SubmissionCreateWithoutUserInputObjectSchema } from './SubmissionCreateWithoutUserInput.schema';
import { SubmissionUncheckedCreateWithoutUserInputObjectSchema as SubmissionUncheckedCreateWithoutUserInputObjectSchema } from './SubmissionUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SubmissionCreateWithoutUserInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const SubmissionCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.SubmissionCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionCreateOrConnectWithoutUserInput>;
export const SubmissionCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
