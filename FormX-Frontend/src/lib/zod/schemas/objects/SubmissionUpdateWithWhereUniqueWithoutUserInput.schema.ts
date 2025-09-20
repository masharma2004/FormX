import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionUpdateWithoutUserInputObjectSchema as SubmissionUpdateWithoutUserInputObjectSchema } from './SubmissionUpdateWithoutUserInput.schema';
import { SubmissionUncheckedUpdateWithoutUserInputObjectSchema as SubmissionUncheckedUpdateWithoutUserInputObjectSchema } from './SubmissionUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SubmissionUpdateWithoutUserInputObjectSchema), z.lazy(() => SubmissionUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const SubmissionUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.SubmissionUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpdateWithWhereUniqueWithoutUserInput>;
export const SubmissionUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
