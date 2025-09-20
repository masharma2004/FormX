import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptWhereInputObjectSchema as FormScriptWhereInputObjectSchema } from './FormScriptWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormScriptWhereInputObjectSchema).optional()
}).strict();
export const ScriptCountOutputTypeCountFormScriptsArgsObjectSchema = makeSchema();
export const ScriptCountOutputTypeCountFormScriptsArgsObjectZodSchema = makeSchema();
