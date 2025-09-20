import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { PasswordResetTokenCreateManyInputObjectSchema as PasswordResetTokenCreateManyInputObjectSchema } from './objects/PasswordResetTokenCreateManyInput.schema';

export const PasswordResetTokenCreateManySchema: z.ZodType<Prisma.PasswordResetTokenCreateManyArgs> = z.object({ data: z.union([ PasswordResetTokenCreateManyInputObjectSchema, z.array(PasswordResetTokenCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.PasswordResetTokenCreateManyArgs>;

export const PasswordResetTokenCreateManyZodSchema = z.object({ data: z.union([ PasswordResetTokenCreateManyInputObjectSchema, z.array(PasswordResetTokenCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();