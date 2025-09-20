import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ScriptCreateManyUserInputObjectSchema: z.ZodType<Prisma.ScriptCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptCreateManyUserInput>;
export const ScriptCreateManyUserInputObjectZodSchema = makeSchema();
