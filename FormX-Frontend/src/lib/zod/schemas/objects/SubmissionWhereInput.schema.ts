import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FormScalarRelationFilterObjectSchema as FormScalarRelationFilterObjectSchema } from './FormScalarRelationFilter.schema';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './FormWhereInput.schema';
import { UserNullableScalarRelationFilterObjectSchema as UserNullableScalarRelationFilterObjectSchema } from './UserNullableScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const submissionwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SubmissionWhereInputObjectSchema), z.lazy(() => SubmissionWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SubmissionWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SubmissionWhereInputObjectSchema), z.lazy(() => SubmissionWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  data: z.lazy(() => JsonFilterObjectSchema).optional(),
  metadata: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  status: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  formId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  form: z.union([z.lazy(() => FormScalarRelationFilterObjectSchema), z.lazy(() => FormWhereInputObjectSchema)]).optional(),
  user: z.union([z.lazy(() => UserNullableScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const SubmissionWhereInputObjectSchema: z.ZodType<Prisma.SubmissionWhereInput> = submissionwhereinputSchema as unknown as z.ZodType<Prisma.SubmissionWhereInput>;
export const SubmissionWhereInputObjectZodSchema = submissionwhereinputSchema;
