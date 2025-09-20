import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NocodbTableWhereInputObjectSchema as NocodbTableWhereInputObjectSchema } from './NocodbTableWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => NocodbTableWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => NocodbTableWhereInputObjectSchema).optional().nullable()
}).strict();
export const NocodbTableNullableScalarRelationFilterObjectSchema: z.ZodType<Prisma.NocodbTableNullableScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableNullableScalarRelationFilter>;
export const NocodbTableNullableScalarRelationFilterObjectZodSchema = makeSchema();
