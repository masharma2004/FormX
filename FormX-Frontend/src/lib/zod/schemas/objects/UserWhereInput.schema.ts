import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FormListRelationFilterObjectSchema as FormListRelationFilterObjectSchema } from './FormListRelationFilter.schema';
import { ScriptListRelationFilterObjectSchema as ScriptListRelationFilterObjectSchema } from './ScriptListRelationFilter.schema';
import { AiUsageListRelationFilterObjectSchema as AiUsageListRelationFilterObjectSchema } from './AiUsageListRelationFilter.schema';
import { SubmissionListRelationFilterObjectSchema as SubmissionListRelationFilterObjectSchema } from './SubmissionListRelationFilter.schema';
import { PasswordResetTokenListRelationFilterObjectSchema as PasswordResetTokenListRelationFilterObjectSchema } from './PasswordResetTokenListRelationFilter.schema'

const userwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => UserWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  password: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  settings: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  forms: z.lazy(() => FormListRelationFilterObjectSchema).optional(),
  scripts: z.lazy(() => ScriptListRelationFilterObjectSchema).optional(),
  aiUsage: z.lazy(() => AiUsageListRelationFilterObjectSchema).optional(),
  submissions: z.lazy(() => SubmissionListRelationFilterObjectSchema).optional(),
  passwordResetTokens: z.lazy(() => PasswordResetTokenListRelationFilterObjectSchema).optional()
}).strict();
export const UserWhereInputObjectSchema: z.ZodType<Prisma.UserWhereInput> = userwhereinputSchema as unknown as z.ZodType<Prisma.UserWhereInput>;
export const UserWhereInputObjectZodSchema = userwhereinputSchema;
