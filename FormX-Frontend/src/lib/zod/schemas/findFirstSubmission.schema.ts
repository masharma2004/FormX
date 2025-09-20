import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionIncludeObjectSchema as SubmissionIncludeObjectSchema } from './objects/SubmissionInclude.schema';
import { SubmissionOrderByWithRelationInputObjectSchema as SubmissionOrderByWithRelationInputObjectSchema } from './objects/SubmissionOrderByWithRelationInput.schema';
import { SubmissionWhereInputObjectSchema as SubmissionWhereInputObjectSchema } from './objects/SubmissionWhereInput.schema';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './objects/SubmissionWhereUniqueInput.schema';
import { SubmissionScalarFieldEnumSchema } from './enums/SubmissionScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SubmissionFindFirstSelectSchema: z.ZodType<Prisma.SubmissionSelect> = z.object({
    id: z.boolean().optional(),
    data: z.boolean().optional(),
    metadata: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    formId: z.boolean().optional(),
    userId: z.boolean().optional(),
    form: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SubmissionSelect>;

export const SubmissionFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    data: z.boolean().optional(),
    metadata: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    formId: z.boolean().optional(),
    userId: z.boolean().optional(),
    form: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const SubmissionFindFirstSchema: z.ZodType<Prisma.SubmissionFindFirstArgs> = z.object({ select: SubmissionFindFirstSelectSchema.optional(), include: z.lazy(() => SubmissionIncludeObjectSchema.optional()), orderBy: z.union([SubmissionOrderByWithRelationInputObjectSchema, SubmissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubmissionWhereInputObjectSchema.optional(), cursor: SubmissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SubmissionScalarFieldEnumSchema, SubmissionScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SubmissionFindFirstArgs>;

export const SubmissionFindFirstZodSchema = z.object({ select: SubmissionFindFirstSelectSchema.optional(), include: z.lazy(() => SubmissionIncludeObjectSchema.optional()), orderBy: z.union([SubmissionOrderByWithRelationInputObjectSchema, SubmissionOrderByWithRelationInputObjectSchema.array()]).optional(), where: SubmissionWhereInputObjectSchema.optional(), cursor: SubmissionWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SubmissionScalarFieldEnumSchema, SubmissionScalarFieldEnumSchema.array()]).optional() }).strict();