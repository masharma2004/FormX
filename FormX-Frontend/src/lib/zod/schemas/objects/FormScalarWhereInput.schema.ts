import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const formscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FormScalarWhereInputObjectSchema), z.lazy(() => FormScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FormScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FormScalarWhereInputObjectSchema), z.lazy(() => FormScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  schema: z.lazy(() => JsonFilterObjectSchema).optional(),
  settings: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  isPublic: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const FormScalarWhereInputObjectSchema: z.ZodType<Prisma.FormScalarWhereInput> = formscalarwhereinputSchema as unknown as z.ZodType<Prisma.FormScalarWhereInput>;
export const FormScalarWhereInputObjectZodSchema = formscalarwhereinputSchema;
