import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScriptUpdateManyMutationInputObjectSchema as ScriptUpdateManyMutationInputObjectSchema } from './objects/ScriptUpdateManyMutationInput.schema';
import { ScriptWhereInputObjectSchema as ScriptWhereInputObjectSchema } from './objects/ScriptWhereInput.schema';

export const ScriptUpdateManySchema: z.ZodType<Prisma.ScriptUpdateManyArgs> = z.object({ data: ScriptUpdateManyMutationInputObjectSchema, where: ScriptWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ScriptUpdateManyArgs>;

export const ScriptUpdateManyZodSchema = z.object({ data: ScriptUpdateManyMutationInputObjectSchema, where: ScriptWhereInputObjectSchema.optional() }).strict();