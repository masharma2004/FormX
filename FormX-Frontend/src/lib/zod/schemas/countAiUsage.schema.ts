import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AiUsageOrderByWithRelationInputObjectSchema as AiUsageOrderByWithRelationInputObjectSchema } from './objects/AiUsageOrderByWithRelationInput.schema';
import { AiUsageWhereInputObjectSchema as AiUsageWhereInputObjectSchema } from './objects/AiUsageWhereInput.schema';
import { AiUsageWhereUniqueInputObjectSchema as AiUsageWhereUniqueInputObjectSchema } from './objects/AiUsageWhereUniqueInput.schema';
import { AiUsageCountAggregateInputObjectSchema as AiUsageCountAggregateInputObjectSchema } from './objects/AiUsageCountAggregateInput.schema';

export const AiUsageCountSchema: z.ZodType<Prisma.AiUsageCountArgs> = z.object({ orderBy: z.union([AiUsageOrderByWithRelationInputObjectSchema, AiUsageOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiUsageWhereInputObjectSchema.optional(), cursor: AiUsageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AiUsageCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.AiUsageCountArgs>;

export const AiUsageCountZodSchema = z.object({ orderBy: z.union([AiUsageOrderByWithRelationInputObjectSchema, AiUsageOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiUsageWhereInputObjectSchema.optional(), cursor: AiUsageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), AiUsageCountAggregateInputObjectSchema ]).optional() }).strict();