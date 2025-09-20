import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AiUsageOrderByWithRelationInputObjectSchema as AiUsageOrderByWithRelationInputObjectSchema } from './objects/AiUsageOrderByWithRelationInput.schema';
import { AiUsageWhereInputObjectSchema as AiUsageWhereInputObjectSchema } from './objects/AiUsageWhereInput.schema';
import { AiUsageWhereUniqueInputObjectSchema as AiUsageWhereUniqueInputObjectSchema } from './objects/AiUsageWhereUniqueInput.schema';
import { AiUsageCountAggregateInputObjectSchema as AiUsageCountAggregateInputObjectSchema } from './objects/AiUsageCountAggregateInput.schema';
import { AiUsageMinAggregateInputObjectSchema as AiUsageMinAggregateInputObjectSchema } from './objects/AiUsageMinAggregateInput.schema';
import { AiUsageMaxAggregateInputObjectSchema as AiUsageMaxAggregateInputObjectSchema } from './objects/AiUsageMaxAggregateInput.schema';
import { AiUsageAvgAggregateInputObjectSchema as AiUsageAvgAggregateInputObjectSchema } from './objects/AiUsageAvgAggregateInput.schema';
import { AiUsageSumAggregateInputObjectSchema as AiUsageSumAggregateInputObjectSchema } from './objects/AiUsageSumAggregateInput.schema';

export const AiUsageAggregateSchema: z.ZodType<Prisma.AiUsageAggregateArgs> = z.object({ orderBy: z.union([AiUsageOrderByWithRelationInputObjectSchema, AiUsageOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiUsageWhereInputObjectSchema.optional(), cursor: AiUsageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AiUsageCountAggregateInputObjectSchema ]).optional(), _min: AiUsageMinAggregateInputObjectSchema.optional(), _max: AiUsageMaxAggregateInputObjectSchema.optional(), _avg: AiUsageAvgAggregateInputObjectSchema.optional(), _sum: AiUsageSumAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiUsageAggregateArgs>;

export const AiUsageAggregateZodSchema = z.object({ orderBy: z.union([AiUsageOrderByWithRelationInputObjectSchema, AiUsageOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiUsageWhereInputObjectSchema.optional(), cursor: AiUsageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), AiUsageCountAggregateInputObjectSchema ]).optional(), _min: AiUsageMinAggregateInputObjectSchema.optional(), _max: AiUsageMaxAggregateInputObjectSchema.optional(), _avg: AiUsageAvgAggregateInputObjectSchema.optional(), _sum: AiUsageSumAggregateInputObjectSchema.optional() }).strict();