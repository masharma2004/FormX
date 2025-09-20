import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PasswordResetTokenSelectObjectSchema as PasswordResetTokenSelectObjectSchema } from './objects/PasswordResetTokenSelect.schema';
import { PasswordResetTokenIncludeObjectSchema as PasswordResetTokenIncludeObjectSchema } from './objects/PasswordResetTokenInclude.schema';
import { PasswordResetTokenWhereUniqueInputObjectSchema as PasswordResetTokenWhereUniqueInputObjectSchema } from './objects/PasswordResetTokenWhereUniqueInput.schema';

export const PasswordResetTokenDeleteOneSchema: z.ZodType<Prisma.PasswordResetTokenDeleteArgs> = z.object({ select: PasswordResetTokenSelectObjectSchema.optional(), include: PasswordResetTokenIncludeObjectSchema.optional(), where: PasswordResetTokenWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PasswordResetTokenDeleteArgs>;

export const PasswordResetTokenDeleteOneZodSchema = z.object({ select: PasswordResetTokenSelectObjectSchema.optional(), include: PasswordResetTokenIncludeObjectSchema.optional(), where: PasswordResetTokenWhereUniqueInputObjectSchema }).strict();