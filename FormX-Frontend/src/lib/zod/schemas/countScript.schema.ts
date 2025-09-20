import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScriptOrderByWithRelationInputObjectSchema as ScriptOrderByWithRelationInputObjectSchema } from './objects/ScriptOrderByWithRelationInput.schema';
import { ScriptWhereInputObjectSchema as ScriptWhereInputObjectSchema } from './objects/ScriptWhereInput.schema';
import { ScriptWhereUniqueInputObjectSchema as ScriptWhereUniqueInputObjectSchema } from './objects/ScriptWhereUniqueInput.schema';
import { ScriptCountAggregateInputObjectSchema as ScriptCountAggregateInputObjectSchema } from './objects/ScriptCountAggregateInput.schema';

export const ScriptCountSchema: z.ZodType<Prisma.ScriptCountArgs> = z.object({ orderBy: z.union([ScriptOrderByWithRelationInputObjectSchema, ScriptOrderByWithRelationInputObjectSchema.array()]).optional(), where: ScriptWhereInputObjectSchema.optional(), cursor: ScriptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ScriptCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ScriptCountArgs>;

export const ScriptCountZodSchema = z.object({ orderBy: z.union([ScriptOrderByWithRelationInputObjectSchema, ScriptOrderByWithRelationInputObjectSchema.array()]).optional(), where: ScriptWhereInputObjectSchema.optional(), cursor: ScriptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ScriptCountAggregateInputObjectSchema ]).optional() }).strict();