import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  token: z.string().optional()
}).strict();
export const PasswordResetTokenWhereUniqueInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.PasswordResetTokenWhereUniqueInput>;
export const PasswordResetTokenWhereUniqueInputObjectZodSchema = makeSchema();
