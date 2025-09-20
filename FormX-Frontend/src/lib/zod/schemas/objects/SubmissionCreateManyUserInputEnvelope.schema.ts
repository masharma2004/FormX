import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionCreateManyUserInputObjectSchema as SubmissionCreateManyUserInputObjectSchema } from './SubmissionCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SubmissionCreateManyUserInputObjectSchema), z.lazy(() => SubmissionCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SubmissionCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.SubmissionCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionCreateManyUserInputEnvelope>;
export const SubmissionCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
