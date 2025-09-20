import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptSelectObjectSchema as ScriptSelectObjectSchema } from './ScriptSelect.schema';
import { ScriptIncludeObjectSchema as ScriptIncludeObjectSchema } from './ScriptInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ScriptSelectObjectSchema).optional(),
  include: z.lazy(() => ScriptIncludeObjectSchema).optional()
}).strict();
export const ScriptArgsObjectSchema = makeSchema();
export const ScriptArgsObjectZodSchema = makeSchema();
