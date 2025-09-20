import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScriptSelectObjectSchema as ScriptSelectObjectSchema } from './objects/ScriptSelect.schema';
import { ScriptIncludeObjectSchema as ScriptIncludeObjectSchema } from './objects/ScriptInclude.schema';
import { ScriptWhereUniqueInputObjectSchema as ScriptWhereUniqueInputObjectSchema } from './objects/ScriptWhereUniqueInput.schema';
import { ScriptCreateInputObjectSchema as ScriptCreateInputObjectSchema } from './objects/ScriptCreateInput.schema';
import { ScriptUncheckedCreateInputObjectSchema as ScriptUncheckedCreateInputObjectSchema } from './objects/ScriptUncheckedCreateInput.schema';
import { ScriptUpdateInputObjectSchema as ScriptUpdateInputObjectSchema } from './objects/ScriptUpdateInput.schema';
import { ScriptUncheckedUpdateInputObjectSchema as ScriptUncheckedUpdateInputObjectSchema } from './objects/ScriptUncheckedUpdateInput.schema';

export const ScriptUpsertOneSchema: z.ZodType<Prisma.ScriptUpsertArgs> = z.object({ select: ScriptSelectObjectSchema.optional(), include: ScriptIncludeObjectSchema.optional(), where: ScriptWhereUniqueInputObjectSchema, create: z.union([ ScriptCreateInputObjectSchema, ScriptUncheckedCreateInputObjectSchema ]), update: z.union([ ScriptUpdateInputObjectSchema, ScriptUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ScriptUpsertArgs>;

export const ScriptUpsertOneZodSchema = z.object({ select: ScriptSelectObjectSchema.optional(), include: ScriptIncludeObjectSchema.optional(), where: ScriptWhereUniqueInputObjectSchema, create: z.union([ ScriptCreateInputObjectSchema, ScriptUncheckedCreateInputObjectSchema ]), update: z.union([ ScriptUpdateInputObjectSchema, ScriptUncheckedUpdateInputObjectSchema ]) }).strict();