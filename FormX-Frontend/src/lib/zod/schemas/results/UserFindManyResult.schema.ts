import * as z from 'zod';
export const UserFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});