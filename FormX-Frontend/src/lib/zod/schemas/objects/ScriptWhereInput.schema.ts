import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { FormScriptListRelationFilterObjectSchema as FormScriptListRelationFilterObjectSchema } from './FormScriptListRelationFilter.schema'

const scriptwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ScriptWhereInputObjectSchema), z.lazy(() => ScriptWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ScriptWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ScriptWhereInputObjectSchema), z.lazy(() => ScriptWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  formScripts: z.lazy(() => FormScriptListRelationFilterObjectSchema).optional()
}).strict();
export const ScriptWhereInputObjectSchema: z.ZodType<Prisma.ScriptWhereInput> = scriptwhereinputSchema as unknown as z.ZodType<Prisma.ScriptWhereInput>;
export const ScriptWhereInputObjectZodSchema = scriptwhereinputSchema;
