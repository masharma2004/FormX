import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionOrderByWithRelationInputObjectSchema as SubmissionOrderByWithRelationInputObjectSchema } from './objects/SubmissionOrderByWithRelationInput.schema';
import { SubmissionWhereInputObjectSchema as SubmissionWhereInputObjectSchema } from './objects/SubmissionWhereInput.schema';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './objects/SubmissionWhereUniqueInput.schema';
import { SubmissionCountAggregateInputObjectSchema as SubmissionCountAggregateInputObjectSchema } from './objects/SubmissionCountAggregateInput.schema';

export const SubmissionCountSchema: z.ZodType<Prisma.SubmissionCountArgs> = z.object({ orderBy: z.union([SubmissionOrderByWithRelationInputObjectSchema, SubmissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubmissionWhereInputObjectSchema.optional(), cursor: SubmissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SubmissionCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.SubmissionCountArgs>;

export const SubmissionCountZodSchema = z.object({ orderBy: z.union([SubmissionOrderByWithRelationInputObjectSchema, SubmissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubmissionWhereInputObjectSchema.optional(), cursor: SubmissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), SubmissionCountAggregateInputObjectSchema ]).optional() }).strict();