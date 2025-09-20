import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './FormWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => FormWhereInputObjectSchema).optional(),
  some: z.lazy(() => FormWhereInputObjectSchema).optional(),
  none: z.lazy(() => FormWhereInputObjectSchema).optional()
}).strict();
export const FormListRelationFilterObjectSchema: z.ZodType<Prisma.FormListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FormListRelationFilter>;
export const FormListRelationFilterObjectZodSchema = makeSchema();
