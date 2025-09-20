import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScriptSelectObjectSchema as ScriptSelectObjectSchema } from './objects/ScriptSelect.schema';
import { ScriptUpdateManyMutationInputObjectSchema as ScriptUpdateManyMutationInputObjectSchema } from './objects/ScriptUpdateManyMutationInput.schema';
import { ScriptWhereInputObjectSchema as ScriptWhereInputObjectSchema } from './objects/ScriptWhereInput.schema';

export const ScriptUpdateManyAndReturnSchema: z.ZodType<Prisma.ScriptUpdateManyAndReturnArgs> = z.object({ select: ScriptSelectObjectSchema.optional(), data: ScriptUpdateManyMutationInputObjectSchema, where: ScriptWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ScriptUpdateManyAndReturnArgs>;

export const ScriptUpdateManyAndReturnZodSchema = z.object({ select: ScriptSelectObjectSchema.optional(), data: ScriptUpdateManyMutationInputObjectSchema, where: ScriptWhereInputObjectSchema.optional() }).strict();