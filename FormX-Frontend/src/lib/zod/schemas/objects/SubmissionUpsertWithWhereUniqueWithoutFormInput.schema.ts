import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionUpdateWithoutFormInputObjectSchema as SubmissionUpdateWithoutFormInputObjectSchema } from './SubmissionUpdateWithoutFormInput.schema';
import { SubmissionUncheckedUpdateWithoutFormInputObjectSchema as SubmissionUncheckedUpdateWithoutFormInputObjectSchema } from './SubmissionUncheckedUpdateWithoutFormInput.schema';
import { SubmissionCreateWithoutFormInputObjectSchema as SubmissionCreateWithoutFormInputObjectSchema } from './SubmissionCreateWithoutFormInput.schema';
import { SubmissionUncheckedCreateWithoutFormInputObjectSchema as SubmissionUncheckedCreateWithoutFormInputObjectSchema } from './SubmissionUncheckedCreateWithoutFormInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SubmissionUpdateWithoutFormInputObjectSchema), z.lazy(() => SubmissionUncheckedUpdateWithoutFormInputObjectSchema)]),
  create: z.union([z.lazy(() => SubmissionCreateWithoutFormInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutFormInputObjectSchema)])
}).strict();
export const SubmissionUpsertWithWhereUniqueWithoutFormInputObjectSchema: z.ZodType<Prisma.SubmissionUpsertWithWhereUniqueWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpsertWithWhereUniqueWithoutFormInput>;
export const SubmissionUpsertWithWhereUniqueWithoutFormInputObjectZodSchema = makeSchema();
