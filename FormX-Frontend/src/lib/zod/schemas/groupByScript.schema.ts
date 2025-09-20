import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScriptWhereInputObjectSchema as ScriptWhereInputObjectSchema } from './objects/ScriptWhereInput.schema';
import { ScriptOrderByWithAggregationInputObjectSchema as ScriptOrderByWithAggregationInputObjectSchema } from './objects/ScriptOrderByWithAggregationInput.schema';
import { ScriptScalarWhereWithAggregatesInputObjectSchema as ScriptScalarWhereWithAggregatesInputObjectSchema } from './objects/ScriptScalarWhereWithAggregatesInput.schema';
import { ScriptScalarFieldEnumSchema } from './enums/ScriptScalarFieldEnum.schema';
import { ScriptCountAggregateInputObjectSchema as ScriptCountAggregateInputObjectSchema } from './objects/ScriptCountAggregateInput.schema';
import { ScriptMinAggregateInputObjectSchema as ScriptMinAggregateInputObjectSchema } from './objects/ScriptMinAggregateInput.schema';
import { ScriptMaxAggregateInputObjectSchema as ScriptMaxAggregateInputObjectSchema } from './objects/ScriptMaxAggregateInput.schema';

export const ScriptGroupBySchema: z.ZodType<Prisma.ScriptGroupByArgs> = z.object({ where: ScriptWhereInputObjectSchema.optional(), orderBy: z.union([ScriptOrderByWithAggregationInputObjectSchema, ScriptOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ScriptScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ScriptScalarFieldEnumSchema), _count: z.union([ z.literal(true), ScriptCountAggregateInputObjectSchema ]).optional(), _min: ScriptMinAggregateInputObjectSchema.optional(), _max: ScriptMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ScriptGroupByArgs>;

export const ScriptGroupByZodSchema = z.object({ where: ScriptWhereInputObjectSchema.optional(), orderBy: z.union([ScriptOrderByWithAggregationInputObjectSchema, ScriptOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ScriptScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ScriptScalarFieldEnumSchema), _count: z.union([ z.literal(true), ScriptCountAggregateInputObjectSchema ]).optional(), _min: ScriptMinAggregateInputObjectSchema.optional(), _max: ScriptMaxAggregateInputObjectSchema.optional() }).strict();