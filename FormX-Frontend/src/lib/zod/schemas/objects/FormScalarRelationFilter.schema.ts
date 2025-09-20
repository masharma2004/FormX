import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './FormWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => FormWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => FormWhereInputObjectSchema).optional()
}).strict();
export const FormScalarRelationFilterObjectSchema: z.ZodType<Prisma.FormScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FormScalarRelationFilter>;
export const FormScalarRelationFilterObjectZodSchema = makeSchema();
