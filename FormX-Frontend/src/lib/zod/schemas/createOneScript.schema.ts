import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScriptSelectObjectSchema as ScriptSelectObjectSchema } from './objects/ScriptSelect.schema';
import { ScriptIncludeObjectSchema as ScriptIncludeObjectSchema } from './objects/ScriptInclude.schema';
import { ScriptCreateInputObjectSchema as ScriptCreateInputObjectSchema } from './objects/ScriptCreateInput.schema';
import { ScriptUncheckedCreateInputObjectSchema as ScriptUncheckedCreateInputObjectSchema } from './objects/ScriptUncheckedCreateInput.schema';

export const ScriptCreateOneSchema: z.ZodType<Prisma.ScriptCreateArgs> = z.object({ select: ScriptSelectObjectSchema.optional(), include: ScriptIncludeObjectSchema.optional(), data: z.union([ScriptCreateInputObjectSchema, ScriptUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ScriptCreateArgs>;

export const ScriptCreateOneZodSchema = z.object({ select: ScriptSelectObjectSchema.optional(), include: ScriptIncludeObjectSchema.optional(), data: z.union([ScriptCreateInputObjectSchema, ScriptUncheckedCreateInputObjectSchema]) }).strict();