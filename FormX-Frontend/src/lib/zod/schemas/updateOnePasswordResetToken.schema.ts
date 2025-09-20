import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PasswordResetTokenSelectObjectSchema as PasswordResetTokenSelectObjectSchema } from './objects/PasswordResetTokenSelect.schema';
import { PasswordResetTokenIncludeObjectSchema as PasswordResetTokenIncludeObjectSchema } from './objects/PasswordResetTokenInclude.schema';
import { PasswordResetTokenUpdateInputObjectSchema as PasswordResetTokenUpdateInputObjectSchema } from './objects/PasswordResetTokenUpdateInput.schema';
import { PasswordResetTokenUncheckedUpdateInputObjectSchema as PasswordResetTokenUncheckedUpdateInputObjectSchema } from './objects/PasswordResetTokenUncheckedUpdateInput.schema';
import { PasswordResetTokenWhereUniqueInputObjectSchema as PasswordResetTokenWhereUniqueInputObjectSchema } from './objects/PasswordResetTokenWhereUniqueInput.schema';

export const PasswordResetTokenUpdateOneSchema: z.ZodType<Prisma.PasswordResetTokenUpdateArgs> = z.object({ select: PasswordResetTokenSelectObjectSchema.optional(), include: PasswordResetTokenIncludeObjectSchema.optional(), data: z.union([PasswordResetTokenUpdateInputObjectSchema, PasswordResetTokenUncheckedUpdateInputObjectSchema]), where: PasswordResetTokenWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PasswordResetTokenUpdateArgs>;

export const PasswordResetTokenUpdateOneZodSchema = z.object({ select: PasswordResetTokenSelectObjectSchema.optional(), include: PasswordResetTokenIncludeObjectSchema.optional(), data: z.union([PasswordResetTokenUpdateInputObjectSchema, PasswordResetTokenUncheckedUpdateInputObjectSchema]), where: PasswordResetTokenWhereUniqueInputObjectSchema }).strict();