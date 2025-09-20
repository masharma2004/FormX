import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const formscriptscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => FormScriptScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FormScriptScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FormScriptScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FormScriptScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => FormScriptScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  event: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  enabled: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  formId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  scriptId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const FormScriptScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.FormScriptScalarWhereWithAggregatesInput> = formscriptscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.FormScriptScalarWhereWithAggregatesInput>;
export const FormScriptScalarWhereWithAggregatesInputObjectZodSchema = formscriptscalarwherewithaggregatesinputSchema;
