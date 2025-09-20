import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormArgsObjectSchema as FormArgsObjectSchema } from './FormArgs.schema';
import { ScriptArgsObjectSchema as ScriptArgsObjectSchema } from './ScriptArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  event: z.boolean().optional(),
  order: z.boolean().optional(),
  enabled: z.boolean().optional(),
  formId: z.boolean().optional(),
  scriptId: z.boolean().optional(),
  form: z.union([z.boolean(), z.lazy(() => FormArgsObjectSchema)]).optional(),
  script: z.union([z.boolean(), z.lazy(() => ScriptArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional()
}).strict();
export const FormScriptSelectObjectSchema: z.ZodType<Prisma.FormScriptSelect> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptSelect>;
export const FormScriptSelectObjectZodSchema = makeSchema();
