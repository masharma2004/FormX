import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScriptSelectObjectSchema as ScriptSelectObjectSchema } from './objects/ScriptSelect.schema';
import { ScriptIncludeObjectSchema as ScriptIncludeObjectSchema } from './objects/ScriptInclude.schema';
import { ScriptUpdateInputObjectSchema as ScriptUpdateInputObjectSchema } from './objects/ScriptUpdateInput.schema';
import { ScriptUncheckedUpdateInputObjectSchema as ScriptUncheckedUpdateInputObjectSchema } from './objects/ScriptUncheckedUpdateInput.schema';
import { ScriptWhereUniqueInputObjectSchema as ScriptWhereUniqueInputObjectSchema } from './objects/ScriptWhereUniqueInput.schema';

export const ScriptUpdateOneSchema: z.ZodType<Prisma.ScriptUpdateArgs> = z.object({ select: ScriptSelectObjectSchema.optional(), include: ScriptIncludeObjectSchema.optional(), data: z.union([ScriptUpdateInputObjectSchema, ScriptUncheckedUpdateInputObjectSchema]), where: ScriptWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ScriptUpdateArgs>;

export const ScriptUpdateOneZodSchema = z.object({ select: ScriptSelectObjectSchema.optional(), include: ScriptIncludeObjectSchema.optional(), data: z.union([ScriptUpdateInputObjectSchema, ScriptUncheckedUpdateInputObjectSchema]), where: ScriptWhereUniqueInputObjectSchema }).strict();