import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptWhereInputObjectSchema as ScriptWhereInputObjectSchema } from './ScriptWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScriptWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountScriptsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountScriptsArgsObjectZodSchema = makeSchema();
