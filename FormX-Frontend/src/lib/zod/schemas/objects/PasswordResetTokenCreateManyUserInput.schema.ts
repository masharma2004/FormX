import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  token: z.string(),
  expiresAt: z.coerce.date(),
  used: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const PasswordResetTokenCreateManyUserInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PasswordResetTokenCreateManyUserInput>;
export const PasswordResetTokenCreateManyUserInputObjectZodSchema = makeSchema();
