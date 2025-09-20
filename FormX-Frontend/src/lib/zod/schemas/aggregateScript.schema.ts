import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScriptOrderByWithRelationInputObjectSchema as ScriptOrderByWithRelationInputObjectSchema } from './objects/ScriptOrderByWithRelationInput.schema';
import { ScriptWhereInputObjectSchema as ScriptWhereInputObjectSchema } from './objects/ScriptWhereInput.schema';
import { ScriptWhereUniqueInputObjectSchema as ScriptWhereUniqueInputObjectSchema } from './objects/ScriptWhereUniqueInput.schema';
import { ScriptCountAggregateInputObjectSchema as ScriptCountAggregateInputObjectSchema } from './objects/ScriptCountAggregateInput.schema';
import { ScriptMinAggregateInputObjectSchema as ScriptMinAggregateInputObjectSchema } from './objects/ScriptMinAggregateInput.schema';
import { ScriptMaxAggregateInputObjectSchema as ScriptMaxAggregateInputObjectSchema } from './objects/ScriptMaxAggregateInput.schema';

export const ScriptAggregateSchema: z.ZodType<Prisma.ScriptAggregateArgs> = z.object({ orderBy: z.union([ScriptOrderByWithRelationInputObjectSchema, ScriptOrderByWithRelationInputObjectSchema.array()]).optional(), where: ScriptWhereInputObjectSchema.optional(), cursor: ScriptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ScriptCountAggregateInputObjectSchema ]).optional(), _min: ScriptMinAggregateInputObjectSchema.optional(), _max: ScriptMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ScriptAggregateArgs>;

export const ScriptAggregateZodSchema = z.object({ orderBy: z.union([ScriptOrderByWithRelationInputObjectSchema, ScriptOrderByWithRelationInputObjectSchema.array()]).optional(), where: ScriptWhereInputObjectSchema.optional(), cursor: ScriptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ScriptCountAggregateInputObjectSchema ]).optional(), _min: ScriptMinAggregateInputObjectSchema.optional(), _max: ScriptMaxAggregateInputObjectSchema.optional() }).strict();