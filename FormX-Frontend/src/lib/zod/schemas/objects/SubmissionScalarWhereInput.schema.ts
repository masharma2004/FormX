import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const submissionscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SubmissionScalarWhereInputObjectSchema), z.lazy(() => SubmissionScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SubmissionScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SubmissionScalarWhereInputObjectSchema), z.lazy(() => SubmissionScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  data: z.lazy(() => JsonFilterObjectSchema).optional(),
  metadata: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  status: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  formId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const SubmissionScalarWhereInputObjectSchema: z.ZodType<Prisma.SubmissionScalarWhereInput> = submissionscalarwhereinputSchema as unknown as z.ZodType<Prisma.SubmissionScalarWhereInput>;
export const SubmissionScalarWhereInputObjectZodSchema = submissionscalarwhereinputSchema;
