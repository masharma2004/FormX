import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScriptSelectObjectSchema as ScriptSelectObjectSchema } from './objects/ScriptSelect.schema';
import { ScriptCreateManyInputObjectSchema as ScriptCreateManyInputObjectSchema } from './objects/ScriptCreateManyInput.schema';

export const ScriptCreateManyAndReturnSchema: z.ZodType<Prisma.ScriptCreateManyAndReturnArgs> = z.object({ select: ScriptSelectObjectSchema.optional(), data: z.union([ ScriptCreateManyInputObjectSchema, z.array(ScriptCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ScriptCreateManyAndReturnArgs>;

export const ScriptCreateManyAndReturnZodSchema = z.object({ select: ScriptSelectObjectSchema.optional(), data: z.union([ ScriptCreateManyInputObjectSchema, z.array(ScriptCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();