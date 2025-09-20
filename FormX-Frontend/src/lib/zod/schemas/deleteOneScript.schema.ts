import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScriptSelectObjectSchema as ScriptSelectObjectSchema } from './objects/ScriptSelect.schema';
import { ScriptIncludeObjectSchema as ScriptIncludeObjectSchema } from './objects/ScriptInclude.schema';
import { ScriptWhereUniqueInputObjectSchema as ScriptWhereUniqueInputObjectSchema } from './objects/ScriptWhereUniqueInput.schema';

export const ScriptDeleteOneSchema: z.ZodType<Prisma.ScriptDeleteArgs> = z.object({ select: ScriptSelectObjectSchema.optional(), include: ScriptIncludeObjectSchema.optional(), where: ScriptWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ScriptDeleteArgs>;

export const ScriptDeleteOneZodSchema = z.object({ select: ScriptSelectObjectSchema.optional(), include: ScriptIncludeObjectSchema.optional(), where: ScriptWhereUniqueInputObjectSchema }).strict();