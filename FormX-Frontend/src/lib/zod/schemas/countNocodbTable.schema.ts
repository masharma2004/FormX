import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NocodbTableOrderByWithRelationInputObjectSchema as NocodbTableOrderByWithRelationInputObjectSchema } from './objects/NocodbTableOrderByWithRelationInput.schema';
import { NocodbTableWhereInputObjectSchema as NocodbTableWhereInputObjectSchema } from './objects/NocodbTableWhereInput.schema';
import { NocodbTableWhereUniqueInputObjectSchema as NocodbTableWhereUniqueInputObjectSchema } from './objects/NocodbTableWhereUniqueInput.schema';
import { NocodbTableCountAggregateInputObjectSchema as NocodbTableCountAggregateInputObjectSchema } from './objects/NocodbTableCountAggregateInput.schema';

export const NocodbTableCountSchema: z.ZodType<Prisma.NocodbTableCountArgs> = z.object({ orderBy: z.union([NocodbTableOrderByWithRelationInputObjectSchema, NocodbTableOrderByWithRelationInputObjectSchema.array()]).optional(), where: NocodbTableWhereInputObjectSchema.optional(), cursor: NocodbTableWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), NocodbTableCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.NocodbTableCountArgs>;

export const NocodbTableCountZodSchema = z.object({ orderBy: z.union([NocodbTableOrderByWithRelationInputObjectSchema, NocodbTableOrderByWithRelationInputObjectSchema.array()]).optional(), where: NocodbTableWhereInputObjectSchema.optional(), cursor: NocodbTableWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), NocodbTableCountAggregateInputObjectSchema ]).optional() }).strict();