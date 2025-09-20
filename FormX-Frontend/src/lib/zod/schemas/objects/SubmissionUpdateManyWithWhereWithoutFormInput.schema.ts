import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionScalarWhereInputObjectSchema as SubmissionScalarWhereInputObjectSchema } from './SubmissionScalarWhereInput.schema';
import { SubmissionUpdateManyMutationInputObjectSchema as SubmissionUpdateManyMutationInputObjectSchema } from './SubmissionUpdateManyMutationInput.schema';
import { SubmissionUncheckedUpdateManyWithoutFormInputObjectSchema as SubmissionUncheckedUpdateManyWithoutFormInputObjectSchema } from './SubmissionUncheckedUpdateManyWithoutFormInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SubmissionUpdateManyMutationInputObjectSchema), z.lazy(() => SubmissionUncheckedUpdateManyWithoutFormInputObjectSchema)])
}).strict();
export const SubmissionUpdateManyWithWhereWithoutFormInputObjectSchema: z.ZodType<Prisma.SubmissionUpdateManyWithWhereWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpdateManyWithWhereWithoutFormInput>;
export const SubmissionUpdateManyWithWhereWithoutFormInputObjectZodSchema = makeSchema();
