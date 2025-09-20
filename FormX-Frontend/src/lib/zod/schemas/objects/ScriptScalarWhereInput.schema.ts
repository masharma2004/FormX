import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const scriptscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ScriptScalarWhereInputObjectSchema), z.lazy(() => ScriptScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ScriptScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ScriptScalarWhereInputObjectSchema), z.lazy(() => ScriptScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ScriptScalarWhereInputObjectSchema: z.ZodType<Prisma.ScriptScalarWhereInput> = scriptscalarwhereinputSchema as unknown as z.ZodType<Prisma.ScriptScalarWhereInput>;
export const ScriptScalarWhereInputObjectZodSchema = scriptscalarwhereinputSchema;
