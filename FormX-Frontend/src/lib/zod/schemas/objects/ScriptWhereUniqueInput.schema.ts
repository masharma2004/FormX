import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const ScriptWhereUniqueInputObjectSchema: z.ZodType<Prisma.ScriptWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptWhereUniqueInput>;
export const ScriptWhereUniqueInputObjectZodSchema = makeSchema();
