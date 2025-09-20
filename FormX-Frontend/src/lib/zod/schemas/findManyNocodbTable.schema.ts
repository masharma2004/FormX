import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NocodbTableIncludeObjectSchema as NocodbTableIncludeObjectSchema } from './objects/NocodbTableInclude.schema';
import { NocodbTableOrderByWithRelationInputObjectSchema as NocodbTableOrderByWithRelationInputObjectSchema } from './objects/NocodbTableOrderByWithRelationInput.schema';
import { NocodbTableWhereInputObjectSchema as NocodbTableWhereInputObjectSchema } from './objects/NocodbTableWhereInput.schema';
import { NocodbTableWhereUniqueInputObjectSchema as NocodbTableWhereUniqueInputObjectSchema } from './objects/NocodbTableWhereUniqueInput.schema';
import { NocodbTableScalarFieldEnumSchema } from './enums/NocodbTableScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const NocodbTableFindManySelectSchema: z.ZodType<Prisma.NocodbTableSelect> = z.object({
    id: z.boolean().optional(),
    tableId: z.boolean().optional(),
    formId: z.boolean().optional(),
    form: z.boolean().optional(),
    metadata: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.NocodbTableSelect>;

export const NocodbTableFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    tableId: z.boolean().optional(),
    formId: z.boolean().optional(),
    form: z.boolean().optional(),
    metadata: z.boolean().optional(),
    createdAt: z.boolean().optional()
  }).strict();

export const NocodbTableFindManySchema: z.ZodType<Prisma.NocodbTableFindManyArgs> = z.object({ select: NocodbTableFindManySelectSchema.optional(), include: z.lazy(() => NocodbTableIncludeObjectSchema.optional()), orderBy: z.union([NocodbTableOrderByWithRelationInputObjectSchema, NocodbTableOrderByWithRelationInputObjectSchema.array()]).optional(), where: NocodbTableWhereInputObjectSchema.optional(), cursor: NocodbTableWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NocodbTableScalarFieldEnumSchema, NocodbTableScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.NocodbTableFindManyArgs>;

export const NocodbTableFindManyZodSchema = z.object({ select: NocodbTableFindManySelectSchema.optional(), include: z.lazy(() => NocodbTableIncludeObjectSchema.optional()), orderBy: z.union([NocodbTableOrderByWithRelationInputObjectSchema, NocodbTableOrderByWithRelationInputObjectSchema.array()]).optional(), where: NocodbTableWhereInputObjectSchema.optional(), cursor: NocodbTableWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([NocodbTableScalarFieldEnumSchema, NocodbTableScalarFieldEnumSchema.array()]).optional() }).strict();