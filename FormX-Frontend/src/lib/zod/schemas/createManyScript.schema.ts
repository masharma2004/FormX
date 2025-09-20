import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScriptCreateManyInputObjectSchema as ScriptCreateManyInputObjectSchema } from './objects/ScriptCreateManyInput.schema';

export const ScriptCreateManySchema: z.ZodType<Prisma.ScriptCreateManyArgs> = z.object({ data: z.union([ ScriptCreateManyInputObjectSchema, z.array(ScriptCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ScriptCreateManyArgs>;

export const ScriptCreateManyZodSchema = z.object({ data: z.union([ ScriptCreateManyInputObjectSchema, z.array(ScriptCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();