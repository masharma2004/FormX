import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptWhereInputObjectSchema as ScriptWhereInputObjectSchema } from './ScriptWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ScriptWhereInputObjectSchema).optional(),
  some: z.lazy(() => ScriptWhereInputObjectSchema).optional(),
  none: z.lazy(() => ScriptWhereInputObjectSchema).optional()
}).strict();
export const ScriptListRelationFilterObjectSchema: z.ZodType<Prisma.ScriptListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ScriptListRelationFilter>;
export const ScriptListRelationFilterObjectZodSchema = makeSchema();
