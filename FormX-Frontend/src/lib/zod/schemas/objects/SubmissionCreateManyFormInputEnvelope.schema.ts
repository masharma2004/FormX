import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionCreateManyFormInputObjectSchema as SubmissionCreateManyFormInputObjectSchema } from './SubmissionCreateManyFormInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => SubmissionCreateManyFormInputObjectSchema), z.lazy(() => SubmissionCreateManyFormInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const SubmissionCreateManyFormInputEnvelopeObjectSchema: z.ZodType<Prisma.SubmissionCreateManyFormInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionCreateManyFormInputEnvelope>;
export const SubmissionCreateManyFormInputEnvelopeObjectZodSchema = makeSchema();
