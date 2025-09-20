import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormIncludeObjectSchema as FormIncludeObjectSchema } from './objects/FormInclude.schema';
import { FormOrderByWithRelationInputObjectSchema as FormOrderByWithRelationInputObjectSchema } from './objects/FormOrderByWithRelationInput.schema';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './objects/FormWhereInput.schema';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './objects/FormWhereUniqueInput.schema';
import { FormScalarFieldEnumSchema } from './enums/FormScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FormFindFirstOrThrowSelectSchema: z.ZodType<Prisma.FormSelect> = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    schema: z.boolean().optional(),
    settings: z.boolean().optional(),
    isActive: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    submissions: z.boolean().optional(),
    scripts: z.boolean().optional(),
    nocodbTable: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.FormSelect>;

export const FormFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    title: z.boolean().optional(),
    description: z.boolean().optional(),
    schema: z.boolean().optional(),
    settings: z.boolean().optional(),
    isActive: z.boolean().optional(),
    isPublic: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    submissions: z.boolean().optional(),
    scripts: z.boolean().optional(),
    nocodbTable: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const FormFindFirstOrThrowSchema: z.ZodType<Prisma.FormFindFirstOrThrowArgs> = z.object({ select: FormFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => FormIncludeObjectSchema.optional()), orderBy: z.union([FormOrderByWithRelationInputObjectSchema, FormOrderByWithRelationInputObjectSchema.array()]).optional(), where: FormWhereInputObjectSchema.optional(), cursor: FormWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FormScalarFieldEnumSchema, FormScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.FormFindFirstOrThrowArgs>;

export const FormFindFirstOrThrowZodSchema = z.object({ select: FormFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => FormIncludeObjectSchema.optional()), orderBy: z.union([FormOrderByWithRelationInputObjectSchema, FormOrderByWithRelationInputObjectSchema.array()]).optional(), where: FormWhereInputObjectSchema.optional(), cursor: FormWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FormScalarFieldEnumSchema, FormScalarFieldEnumSchema.array()]).optional() }).strict();