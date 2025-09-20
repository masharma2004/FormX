import * as z from 'zod';
export const SubmissionUpsertResultSchema = z.object({
  id: z.string(),
  data: z.unknown(),
  metadata: z.unknown().optional(),
  status: z.string(),
  createdAt: z.date(),
  formId: z.string(),
  userId: z.string().optional(),
  form: z.unknown(),
  user: z.unknown().optional()
});