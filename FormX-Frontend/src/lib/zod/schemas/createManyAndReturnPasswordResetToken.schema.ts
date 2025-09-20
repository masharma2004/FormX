import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PasswordResetTokenSelectObjectSchema as PasswordResetTokenSelectObjectSchema } from './objects/PasswordResetTokenSelect.schema';
import { PasswordResetTokenCreateManyInputObjectSchema as PasswordResetTokenCreateManyInputObjectSchema } from './objects/PasswordResetTokenCreateManyInput.schema';

export const PasswordResetTokenCreateManyAndReturnSchema: z.ZodType<Prisma.PasswordResetTokenCreateManyAndReturnArgs> = z.object({ select: PasswordResetTokenSelectObjectSchema.optional(), data: z.union([ PasswordResetTokenCreateManyInputObjectSchema, z.array(PasswordResetTokenCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PasswordResetTokenCreateManyAndReturnArgs>;

export const PasswordResetTokenCreateManyAndReturnZodSchema = z.object({ select: PasswordResetTokenSelectObjectSchema.optional(), data: z.union([ PasswordResetTokenCreateManyInputObjectSchema, z.array(PasswordResetTokenCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();