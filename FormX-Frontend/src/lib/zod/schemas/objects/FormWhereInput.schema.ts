import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { SubmissionListRelationFilterObjectSchema as SubmissionListRelationFilterObjectSchema } from './SubmissionListRelationFilter.schema';
import { FormScriptListRelationFilterObjectSchema as FormScriptListRelationFilterObjectSchema } from './FormScriptListRelationFilter.schema';
import { NocodbTableNullableScalarRelationFilterObjectSchema as NocodbTableNullableScalarRelationFilterObjectSchema } from './NocodbTableNullableScalarRelationFilter.schema';
import { NocodbTableWhereInputObjectSchema as NocodbTableWhereInputObjectSchema } from './NocodbTableWhereInput.schema'

const formwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FormWhereInputObjectSchema), z.lazy(() => FormWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FormWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FormWhereInputObjectSchema), z.lazy(() => FormWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  schema: z.lazy(() => JsonFilterObjectSchema).optional(),
  settings: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  submissions: z.lazy(() => SubmissionListRelationFilterObjectSchema).optional(),
  scripts: z.lazy(() => FormScriptListRelationFilterObjectSchema).optional(),
  nocodbTable: z.union([z.lazy(() => NocodbTableNullableScalarRelationFilterObjectSchema), z.lazy(() => NocodbTableWhereInputObjectSchema)]).optional()
}).strict();
export const FormWhereInputObjectSchema: z.ZodType<Prisma.FormWhereInput> = formwhereinputSchema as unknown as z.ZodType<Prisma.FormWhereInput>;
export const FormWhereInputObjectZodSchema = formwhereinputSchema;
