import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  code: z.string(),
  description: z.string().optional().nullable(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const ScriptCreateManyInputObjectSchema: z.ZodType<Prisma.ScriptCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptCreateManyInput>;
export const ScriptCreateManyInputObjectZodSchema = makeSchema();
