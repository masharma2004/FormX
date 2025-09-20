import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './SubmissionWhereUniqueInput.schema';
import { SubmissionCreateWithoutFormInputObjectSchema as SubmissionCreateWithoutFormInputObjectSchema } from './SubmissionCreateWithoutFormInput.schema';
import { SubmissionUncheckedCreateWithoutFormInputObjectSchema as SubmissionUncheckedCreateWithoutFormInputObjectSchema } from './SubmissionUncheckedCreateWithoutFormInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SubmissionCreateWithoutFormInputObjectSchema), z.lazy(() => SubmissionUncheckedCreateWithoutFormInputObjectSchema)])
}).strict();
export const SubmissionCreateOrConnectWithoutFormInputObjectSchema: z.ZodType<Prisma.SubmissionCreateOrConnectWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionCreateOrConnectWithoutFormInput>;
export const SubmissionCreateOrConnectWithoutFormInputObjectZodSchema = makeSchema();
