import * as z from 'zod';
export const UserCreateResultSchema = z.object({
  id: z.string(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional(),
  settings: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  forms: z.array(z.unknown()),
  scripts: z.array(z.unknown()),
  aiUsage: z.array(z.unknown()),
  submissions: z.array(z.unknown()),
  passwordResetTokens: z.array(z.unknown())
});