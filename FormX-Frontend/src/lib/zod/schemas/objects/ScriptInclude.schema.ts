import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { FormScriptFindManySchema as FormScriptFindManySchema } from '../findManyFormScript.schema';
import { ScriptCountOutputTypeArgsObjectSchema as ScriptCountOutputTypeArgsObjectSchema } from './ScriptCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  formScripts: z.union([z.boolean(), z.lazy(() => FormScriptFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ScriptCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ScriptIncludeObjectSchema: z.ZodType<Prisma.ScriptInclude> = makeSchema() as unknown as z.ZodType<Prisma.ScriptInclude>;
export const ScriptIncludeObjectZodSchema = makeSchema();
