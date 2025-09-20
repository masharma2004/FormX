import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PasswordResetTokenWhereInputObjectSchema as PasswordResetTokenWhereInputObjectSchema } from './objects/PasswordResetTokenWhereInput.schema';

export const PasswordResetTokenDeleteManySchema: z.ZodType<Prisma.PasswordResetTokenDeleteManyArgs> = z.object({ where: PasswordResetTokenWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PasswordResetTokenDeleteManyArgs>;

export const PasswordResetTokenDeleteManyZodSchema = z.object({ where: PasswordResetTokenWhereInputObjectSchema.optional() }).strict();