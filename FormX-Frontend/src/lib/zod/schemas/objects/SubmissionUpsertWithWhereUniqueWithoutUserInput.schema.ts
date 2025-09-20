import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionUpdateWithoutUserInputObjectSchema as SubmissionUpdateWithoutUserInputObjectSchema } from './SubmissionUpdateWithoutUserInput.schema';
import { SubmissionUncheckedUpdateWithoutUserInputObjectSchema as SubmissionUncheckedUpdateWithoutUserInputObjectSchema } from './SubmissionUncheckedUpdateWithoutUserInput.schema';
import { SubmissionCreateWithoutUserInputObjectSchema as SubmissionCreateWithoutUserInputObjectSchema } from './SubmissionCreateWithoutUserInput.schema';
import { SubmissionUncheckedCreateWithoutUserInputObjectSchema as SubmissionUncheckedCreateWithoutUserInputObjectSchema } from './SubmissionUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SubmissionUpdateWithoutUserInputObjectSchema), z.lazy(() => SubmissionUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => SubmissionCreateWithoutUserInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const SubmissionUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.SubmissionUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpsertWithWhereUniqueWithoutUserInput>;
export const SubmissionUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
