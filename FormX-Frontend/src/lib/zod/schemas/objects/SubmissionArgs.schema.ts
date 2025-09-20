import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionSelectObjectSchema as SubmissionSelectObjectSchema } from './SubmissionSelect.schema';
import { SubmissionIncludeObjectSchema as SubmissionIncludeObjectSchema } from './SubmissionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SubmissionSelectObjectSchema).optional(),
  include: z.lazy(() => SubmissionIncludeObjectSchema).optional()
}).strict();
export const SubmissionArgsObjectSchema = makeSchema();
export const SubmissionArgsObjectZodSchema = makeSchema();
