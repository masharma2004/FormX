import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptCountOutputTypeCountFormScriptsArgsObjectSchema as ScriptCountOutputTypeCountFormScriptsArgsObjectSchema } from './ScriptCountOutputTypeCountFormScriptsArgs.schema'

const makeSchema = () => z.object({
  formScripts: z.union([z.boolean(), z.lazy(() => ScriptCountOutputTypeCountFormScriptsArgsObjectSchema)]).optional()
}).strict();
export const ScriptCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.ScriptCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ScriptCountOutputTypeSelect>;
export const ScriptCountOutputTypeSelectObjectZodSchema = makeSchema();
