import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScriptWhereInputObjectSchema as ScriptWhereInputObjectSchema } from './objects/ScriptWhereInput.schema';

export const ScriptDeleteManySchema: z.ZodType<Prisma.ScriptDeleteManyArgs> = z.object({ where: ScriptWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ScriptDeleteManyArgs>;

export const ScriptDeleteManyZodSchema = z.object({ where: ScriptWhereInputObjectSchema.optional() }).strict();