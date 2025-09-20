import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PasswordResetTokenIncludeObjectSchema as PasswordResetTokenIncludeObjectSchema } from './objects/PasswordResetTokenInclude.schema';
import { PasswordResetTokenOrderByWithRelationInputObjectSchema as PasswordResetTokenOrderByWithRelationInputObjectSchema } from './objects/PasswordResetTokenOrderByWithRelationInput.schema';
import { PasswordResetTokenWhereInputObjectSchema as PasswordResetTokenWhereInputObjectSchema } from './objects/PasswordResetTokenWhereInput.schema';
import { PasswordResetTokenWhereUniqueInputObjectSchema as PasswordResetTokenWhereUniqueInputObjectSchema } from './objects/PasswordResetTokenWhereUniqueInput.schema';
import { PasswordResetTokenScalarFieldEnumSchema } from './enums/PasswordResetTokenScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PasswordResetTokenFindFirstOrThrowSelectSchema: z.ZodType<Prisma.PasswordResetTokenSelect> = z.object({
    id: z.boolean().optional(),
    token: z.boolean().optional(),
    userId: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    used: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.PasswordResetTokenSelect>;

export const PasswordResetTokenFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    token: z.boolean().optional(),
    userId: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    used: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const PasswordResetTokenFindFirstOrThrowSchema: z.ZodType<Prisma.PasswordResetTokenFindFirstOrThrowArgs> = z.object({ select: PasswordResetTokenFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PasswordResetTokenIncludeObjectSchema.optional()), orderBy: z.union([PasswordResetTokenOrderByWithRelationInputObjectSchema, PasswordResetTokenOrderByWithRelationInputObjectSchema.array()]).optional(), where: PasswordResetTokenWhereInputObjectSchema.optional(), cursor: PasswordResetTokenWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PasswordResetTokenScalarFieldEnumSchema, PasswordResetTokenScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.PasswordResetTokenFindFirstOrThrowArgs>;

export const PasswordResetTokenFindFirstOrThrowZodSchema = z.object({ select: PasswordResetTokenFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => PasswordResetTokenIncludeObjectSchema.optional()), orderBy: z.union([PasswordResetTokenOrderByWithRelationInputObjectSchema, PasswordResetTokenOrderByWithRelationInputObjectSchema.array()]).optional(), where: PasswordResetTokenWhereInputObjectSchema.optional(), cursor: PasswordResetTokenWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PasswordResetTokenScalarFieldEnumSchema, PasswordResetTokenScalarFieldEnumSchema.array()]).optional() }).strict();