import * as z from 'zod';
export const ScriptUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  code: z.string(),
  description: z.string().optional(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.unknown(),
  formScripts: z.array(z.unknown())
});