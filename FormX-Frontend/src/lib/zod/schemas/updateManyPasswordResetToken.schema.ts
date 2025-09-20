import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PasswordResetTokenUpdateManyMutationInputObjectSchema as PasswordResetTokenUpdateManyMutationInputObjectSchema } from './objects/PasswordResetTokenUpdateManyMutationInput.schema';
import { PasswordResetTokenWhereInputObjectSchema as PasswordResetTokenWhereInputObjectSchema } from './objects/PasswordResetTokenWhereInput.schema';

export const PasswordResetTokenUpdateManySchema: z.ZodType<Prisma.PasswordResetTokenUpdateManyArgs> = z.object({ data: PasswordResetTokenUpdateManyMutationInputObjectSchema, where: PasswordResetTokenWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.PasswordResetTokenUpdateManyArgs>;

export const PasswordResetTokenUpdateManyZodSchema = z.object({ data: PasswordResetTokenUpdateManyMutationInputObjectSchema, where: PasswordResetTokenWhereInputObjectSchema.optional() }).strict();