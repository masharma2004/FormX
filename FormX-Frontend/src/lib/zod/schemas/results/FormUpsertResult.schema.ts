import * as z from 'zod';
export const FormUpsertResultSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  schema: z.unknown(),
  settings: z.unknown().optional(),
  isActive: z.boolean(),
  isPublic: z.boolean(),
  userId: z.string(),
  user: z.unknown(),
  submissions: z.array(z.unknown()),
  scripts: z.array(z.unknown()),
  nocodbTable: z.unknown().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});