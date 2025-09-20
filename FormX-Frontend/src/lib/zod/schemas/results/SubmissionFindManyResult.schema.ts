import * as z from 'zod';
export const SubmissionFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  data: z.unknown(),
  metadata: z.unknown().optional(),
  status: z.string(),
  createdAt: z.date(),
  formId: z.string(),
  userId: z.string().optional(),
  form: z.unknown(),
  user: z.unknown().optional()
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