import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PasswordResetTokenSelectObjectSchema as PasswordResetTokenSelectObjectSchema } from './objects/PasswordResetTokenSelect.schema';
import { PasswordResetTokenIncludeObjectSchema as PasswordResetTokenIncludeObjectSchema } from './objects/PasswordResetTokenInclude.schema';
import { PasswordResetTokenWhereUniqueInputObjectSchema as PasswordResetTokenWhereUniqueInputObjectSchema } from './objects/PasswordResetTokenWhereUniqueInput.schema';
import { PasswordResetTokenCreateInputObjectSchema as PasswordResetTokenCreateInputObjectSchema } from './objects/PasswordResetTokenCreateInput.schema';
import { PasswordResetTokenUncheckedCreateInputObjectSchema as PasswordResetTokenUncheckedCreateInputObjectSchema } from './objects/PasswordResetTokenUncheckedCreateInput.schema';
import { PasswordResetTokenUpdateInputObjectSchema as PasswordResetTokenUpdateInputObjectSchema } from './objects/PasswordResetTokenUpdateInput.schema';
import { PasswordResetTokenUncheckedUpdateInputObjectSchema as PasswordResetTokenUncheckedUpdateInputObjectSchema } from './objects/PasswordResetTokenUncheckedUpdateInput.schema';

export const PasswordResetTokenUpsertOneSchema: z.ZodType<Prisma.PasswordResetTokenUpsertArgs> = z.object({ select: PasswordResetTokenSelectObjectSchema.optional(), include: PasswordResetTokenIncludeObjectSchema.optional(), where: PasswordResetTokenWhereUniqueInputObjectSchema, create: z.union([ PasswordResetTokenCreateInputObjectSchema, PasswordResetTokenUncheckedCreateInputObjectSchema ]), update: z.union([ PasswordResetTokenUpdateInputObjectSchema, PasswordResetTokenUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.PasswordResetTokenUpsertArgs>;

export const PasswordResetTokenUpsertOneZodSchema = z.object({ select: PasswordResetTokenSelectObjectSchema.optional(), include: PasswordResetTokenIncludeObjectSchema.optional(), where: PasswordResetTokenWhereUniqueInputObjectSchema, create: z.union([ PasswordResetTokenCreateInputObjectSchema, PasswordResetTokenUncheckedCreateInputObjectSchema ]), update: z.union([ PasswordResetTokenUpdateInputObjectSchema, PasswordResetTokenUncheckedUpdateInputObjectSchema ]) }).strict();