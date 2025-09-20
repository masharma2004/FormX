import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionUpdateWithoutFormInputObjectSchema as SubmissionUpdateWithoutFormInputObjectSchema } from './SubmissionUpdateWithoutFormInput.schema';
import { SubmissionUncheckedUpdateWithoutFormInputObjectSchema as SubmissionUncheckedUpdateWithoutFormInputObjectSchema } from './SubmissionUncheckedUpdateWithoutFormInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SubmissionUpdateWithoutFormInputObjectSchema), z.lazy(() => SubmissionUncheckedUpdateWithoutFormInputObjectSchema)])
}).strict();
export const SubmissionUpdateWithWhereUniqueWithoutFormInputObjectSchema: z.ZodType<Prisma.SubmissionUpdateWithWhereUniqueWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpdateWithWhereUniqueWithoutFormInput>;
export const SubmissionUpdateWithWhereUniqueWithoutFormInputObjectZodSchema = makeSchema();
