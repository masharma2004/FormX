import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const nocodbtablescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => NocodbTableScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => NocodbTableScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NocodbTableScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NocodbTableScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => NocodbTableScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  tableId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  formId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  metadata: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const NocodbTableScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.NocodbTableScalarWhereWithAggregatesInput> = nocodbtablescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.NocodbTableScalarWhereWithAggregatesInput>;
export const NocodbTableScalarWhereWithAggregatesInputObjectZodSchema = nocodbtablescalarwherewithaggregatesinputSchema;
