import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AiUsageIncludeObjectSchema as AiUsageIncludeObjectSchema } from './objects/AiUsageInclude.schema';
import { AiUsageOrderByWithRelationInputObjectSchema as AiUsageOrderByWithRelationInputObjectSchema } from './objects/AiUsageOrderByWithRelationInput.schema';
import { AiUsageWhereInputObjectSchema as AiUsageWhereInputObjectSchema } from './objects/AiUsageWhereInput.schema';
import { AiUsageWhereUniqueInputObjectSchema as AiUsageWhereUniqueInputObjectSchema } from './objects/AiUsageWhereUniqueInput.schema';
import { AiUsageScalarFieldEnumSchema } from './enums/AiUsageScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AiUsageFindFirstOrThrowSelectSchema: z.ZodType<Prisma.AiUsageSelect> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    operation: z.boolean().optional(),
    model: z.boolean().optional(),
    date: z.boolean().optional(),
    tokensUsed: z.boolean().optional(),
    cost: z.boolean().optional(),
    metadata: z.boolean().optional(),
    user: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.AiUsageSelect>;

export const AiUsageFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    operation: z.boolean().optional(),
    model: z.boolean().optional(),
    date: z.boolean().optional(),
    tokensUsed: z.boolean().optional(),
    cost: z.boolean().optional(),
    metadata: z.boolean().optional(),
    user: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const AiUsageFindFirstOrThrowSchema: z.ZodType<Prisma.AiUsageFindFirstOrThrowArgs> = z.object({ select: AiUsageFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AiUsageIncludeObjectSchema.optional()), orderBy: z.union([AiUsageOrderByWithRelationInputObjectSchema, AiUsageOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiUsageWhereInputObjectSchema.optional(), cursor: AiUsageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AiUsageScalarFieldEnumSchema, AiUsageScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.AiUsageFindFirstOrThrowArgs>;

export const AiUsageFindFirstOrThrowZodSchema = z.object({ select: AiUsageFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => AiUsageIncludeObjectSchema.optional()), orderBy: z.union([AiUsageOrderByWithRelationInputObjectSchema, AiUsageOrderByWithRelationInputObjectSchema.array()]).optional(), where: AiUsageWhereInputObjectSchema.optional(), cursor: AiUsageWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([AiUsageScalarFieldEnumSchema, AiUsageScalarFieldEnumSchema.array()]).optional() }).strict();