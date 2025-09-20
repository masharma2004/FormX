import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FormScalarRelationFilterObjectSchema as FormScalarRelationFilterObjectSchema } from './FormScalarRelationFilter.schema';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './FormWhereInput.schema'

const nocodbtablewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => NocodbTableWhereInputObjectSchema), z.lazy(() => NocodbTableWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => NocodbTableWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => NocodbTableWhereInputObjectSchema), z.lazy(() => NocodbTableWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  tableId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  formId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  metadata: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  form: z.union([z.lazy(() => FormScalarRelationFilterObjectSchema), z.lazy(() => FormWhereInputObjectSchema)]).optional()
}).strict();
export const NocodbTableWhereInputObjectSchema: z.ZodType<Prisma.NocodbTableWhereInput> = nocodbtablewhereinputSchema as unknown as z.ZodType<Prisma.NocodbTableWhereInput>;
export const NocodbTableWhereInputObjectZodSchema = nocodbtablewhereinputSchema;
