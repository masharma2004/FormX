import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PasswordResetTokenSelectObjectSchema as PasswordResetTokenSelectObjectSchema } from './objects/PasswordResetTokenSelect.schema';
import { PasswordResetTokenIncludeObjectSchema as PasswordResetTokenIncludeObjectSchema } from './objects/PasswordResetTokenInclude.schema';
import { PasswordResetTokenCreateInputObjectSchema as PasswordResetTokenCreateInputObjectSchema } from './objects/PasswordResetTokenCreateInput.schema';
import { PasswordResetTokenUncheckedCreateInputObjectSchema as PasswordResetTokenUncheckedCreateInputObjectSchema } from './objects/PasswordResetTokenUncheckedCreateInput.schema';

export const PasswordResetTokenCreateOneSchema: z.ZodType<Prisma.PasswordResetTokenCreateArgs> = z.object({ select: PasswordResetTokenSelectObjectSchema.optional(), include: PasswordResetTokenIncludeObjectSchema.optional(), data: z.union([PasswordResetTokenCreateInputObjectSchema, PasswordResetTokenUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.PasswordResetTokenCreateArgs>;

export const PasswordResetTokenCreateOneZodSchema = z.object({ select: PasswordResetTokenSelectObjectSchema.optional(), include: PasswordResetTokenIncludeObjectSchema.optional(), data: z.union([PasswordResetTokenCreateInputObjectSchema, PasswordResetTokenUncheckedCreateInputObjectSchema]) }).strict();