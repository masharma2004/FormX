import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptWhereInputObjectSchema as FormScriptWhereInputObjectSchema } from './FormScriptWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => FormScriptWhereInputObjectSchema).optional(),
  some: z.lazy(() => FormScriptWhereInputObjectSchema).optional(),
  none: z.lazy(() => FormScriptWhereInputObjectSchema).optional()
}).strict();
export const FormScriptListRelationFilterObjectSchema: z.ZodType<Prisma.FormScriptListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptListRelationFilter>;
export const FormScriptListRelationFilterObjectZodSchema = makeSchema();
