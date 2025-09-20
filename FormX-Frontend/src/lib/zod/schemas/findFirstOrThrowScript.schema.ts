import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ScriptIncludeObjectSchema as ScriptIncludeObjectSchema } from './objects/ScriptInclude.schema';
import { ScriptOrderByWithRelationInputObjectSchema as ScriptOrderByWithRelationInputObjectSchema } from './objects/ScriptOrderByWithRelationInput.schema';
import { ScriptWhereInputObjectSchema as ScriptWhereInputObjectSchema } from './objects/ScriptWhereInput.schema';
import { ScriptWhereUniqueInputObjectSchema as ScriptWhereUniqueInputObjectSchema } from './objects/ScriptWhereUniqueInput.schema';
import { ScriptScalarFieldEnumSchema } from './enums/ScriptScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ScriptFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ScriptSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    userId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.boolean().optional(),
    formScripts: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ScriptSelect>;

export const ScriptFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    code: z.boolean().optional(),
    description: z.boolean().optional(),
    userId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    user: z.boolean().optional(),
    formScripts: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const ScriptFindFirstOrThrowSchema: z.ZodType<Prisma.ScriptFindFirstOrThrowArgs> = z.object({ select: ScriptFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ScriptIncludeObjectSchema.optional()), orderBy: z.union([ScriptOrderByWithRelationInputObjectSchema, ScriptOrderByWithRelationInputObjectSchema.array()]).optional(), where: ScriptWhereInputObjectSchema.optional(), cursor: ScriptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ScriptScalarFieldEnumSchema, ScriptScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ScriptFindFirstOrThrowArgs>;

export const ScriptFindFirstOrThrowZodSchema = z.object({ select: ScriptFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ScriptIncludeObjectSchema.optional()), orderBy: z.union([ScriptOrderByWithRelationInputObjectSchema, ScriptOrderByWithRelationInputObjectSchema.array()]).optional(), where: ScriptWhereInputObjectSchema.optional(), cursor: ScriptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ScriptScalarFieldEnumSchema, ScriptScalarFieldEnumSchema.array()]).optional() }).strict();