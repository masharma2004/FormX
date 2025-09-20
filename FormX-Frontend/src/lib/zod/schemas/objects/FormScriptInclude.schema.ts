import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormArgsObjectSchema as FormArgsObjectSchema } from './FormArgs.schema';
import { ScriptArgsObjectSchema as ScriptArgsObjectSchema } from './ScriptArgs.schema'

const makeSchema = () => z.object({
  form: z.union([z.boolean(), z.lazy(() => FormArgsObjectSchema)]).optional(),
  script: z.union([z.boolean(), z.lazy(() => ScriptArgsObjectSchema)]).optional()
}).strict();
export const FormScriptIncludeObjectSchema: z.ZodType<Prisma.FormScriptInclude> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptInclude>;
export const FormScriptIncludeObjectZodSchema = makeSchema();
