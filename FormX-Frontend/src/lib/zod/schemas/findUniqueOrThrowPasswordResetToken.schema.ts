import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PasswordResetTokenSelectObjectSchema as PasswordResetTokenSelectObjectSchema } from './objects/PasswordResetTokenSelect.schema';
import { PasswordResetTokenIncludeObjectSchema as PasswordResetTokenIncludeObjectSchema } from './objects/PasswordResetTokenInclude.schema';
import { PasswordResetTokenWhereUniqueInputObjectSchema as PasswordResetTokenWhereUniqueInputObjectSchema } from './objects/PasswordResetTokenWhereUniqueInput.schema';

export const PasswordResetTokenFindUniqueOrThrowSchema: z.ZodType<Prisma.PasswordResetTokenFindUniqueOrThrowArgs> = z.object({ select: PasswordResetTokenSelectObjectSchema.optional(), include: PasswordResetTokenIncludeObjectSchema.optional(), where: PasswordResetTokenWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.PasswordResetTokenFindUniqueOrThrowArgs>;

export const PasswordResetTokenFindUniqueOrThrowZodSchema = z.object({ select: PasswordResetTokenSelectObjectSchema.optional(), include: PasswordResetTokenIncludeObjectSchema.optional(), where: PasswordResetTokenWhereUniqueInputObjectSchema }).strict();