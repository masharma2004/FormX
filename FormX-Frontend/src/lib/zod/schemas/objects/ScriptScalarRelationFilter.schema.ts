import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptWhereInputObjectSchema as ScriptWhereInputObjectSchema } from './ScriptWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ScriptWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ScriptWhereInputObjectSchema).optional()
}).strict();
export const ScriptScalarRelationFilterObjectSchema: z.ZodType<Prisma.ScriptScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ScriptScalarRelationFilter>;
export const ScriptScalarRelationFilterObjectZodSchema = makeSchema();
