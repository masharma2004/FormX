import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptSelectObjectSchema as FormScriptSelectObjectSchema } from './FormScriptSelect.schema';
import { FormScriptIncludeObjectSchema as FormScriptIncludeObjectSchema } from './FormScriptInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FormScriptSelectObjectSchema).optional(),
  include: z.lazy(() => FormScriptIncludeObjectSchema).optional()
}).strict();
export const FormScriptArgsObjectSchema = makeSchema();
export const FormScriptArgsObjectZodSchema = makeSchema();
