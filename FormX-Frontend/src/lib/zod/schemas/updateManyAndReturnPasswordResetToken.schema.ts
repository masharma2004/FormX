import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PasswordResetTokenSelectObjectSchema as PasswordResetTokenSelectObjectSchema } from './objects/PasswordResetTokenSelect.schema';
import { PasswordResetTokenUpdateManyMutationInputObjectSchema as PasswordResetTokenUpdateManyMutationInputObjectSchema } from './objects/PasswordResetTokenUpdateManyMutationInput.schema';
import { PasswordResetTokenWhereInputObjectSchema as PasswordResetTokenWhereInputObjectSchema } from './objects/PasswordResetTokenWhereInput.schema';

export const PasswordResetTokenUpdateManyAndReturnSchema: z.ZodType<Prisma.PasswordResetTokenUpdateManyAndReturnArgs> = z.object({ select: PasswordResetTokenSelectObjectSchema.optional(), data: PasswordResetTokenUpdateManyMutationInputObjectSchema, where: PasswordResetTokenWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PasswordResetTokenUpdateManyAndReturnArgs>;

export const PasswordResetTokenUpdateManyAndReturnZodSchema = z.object({ select: PasswordResetTokenSelectObjectSchema.optional(), data: PasswordResetTokenUpdateManyMutationInputObjectSchema, where: PasswordResetTokenWhereInputObjectSchema.optional() }).strict();