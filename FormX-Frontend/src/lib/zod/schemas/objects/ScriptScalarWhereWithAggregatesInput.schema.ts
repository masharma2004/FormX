import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const scriptscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ScriptScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ScriptScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ScriptScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ScriptScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ScriptScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  code: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ScriptScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ScriptScalarWhereWithAggregatesInput> = scriptscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ScriptScalarWhereWithAggregatesInput>;
export const ScriptScalarWhereWithAggregatesInputObjectZodSchema = scriptscalarwherewithaggregatesinputSchema;
