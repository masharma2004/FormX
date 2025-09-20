import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { FormScriptFindManySchema as FormScriptFindManySchema } from '../findManyFormScript.schema';
import { ScriptCountOutputTypeArgsObjectSchema as ScriptCountOutputTypeArgsObjectSchema } from './ScriptCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  code: z.boolean().optional(),
  description: z.boolean().optional(),
  userId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  formScripts: z.union([z.boolean(), z.lazy(() => FormScriptFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => ScriptCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const ScriptSelectObjectSchema: z.ZodType<Prisma.ScriptSelect> = makeSchema() as unknown as z.ZodType<Prisma.ScriptSelect>;
export const ScriptSelectObjectZodSchema = makeSchema();
