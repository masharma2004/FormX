import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptCountOutputTypeSelectObjectSchema as ScriptCountOutputTypeSelectObjectSchema } from './ScriptCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ScriptCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const ScriptCountOutputTypeArgsObjectSchema = makeSchema();
export const ScriptCountOutputTypeArgsObjectZodSchema = makeSchema();
