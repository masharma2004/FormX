import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionWhereInputObjectSchema as SubmissionWhereInputObjectSchema } from './SubmissionWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => SubmissionWhereInputObjectSchema).optional(),
  some: z.lazy(() => SubmissionWhereInputObjectSchema).optional(),
  none: z.lazy(() => SubmissionWhereInputObjectSchema).optional()
}).strict();
export const SubmissionListRelationFilterObjectSchema: z.ZodType<Prisma.SubmissionListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionListRelationFilter>;
export const SubmissionListRelationFilterObjectZodSchema = makeSchema();
