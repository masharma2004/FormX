import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionScalarWhereInputObjectSchema as SubmissionScalarWhereInputObjectSchema } from './SubmissionScalarWhereInput.schema';
import { SubmissionUpdateManyMutationInputObjectSchema as SubmissionUpdateManyMutationInputObjectSchema } from './SubmissionUpdateManyMutationInput.schema';
import { SubmissionUncheckedUpdateManyWithoutUserInputObjectSchema as SubmissionUncheckedUpdateManyWithoutUserInputObjectSchema } from './SubmissionUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => SubmissionUpdateManyMutationInputObjectSchema), z.lazy(() => SubmissionUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const SubmissionUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.SubmissionUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpdateManyWithWhereWithoutUserInput>;
export const SubmissionUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
