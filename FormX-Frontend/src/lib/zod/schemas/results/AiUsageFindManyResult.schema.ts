import * as z from 'zod';
export const AiUsageFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  userId: z.string(),
  operation: z.string(),
  model: z.string(),
  date: z.date(),
  tokensUsed: z.number().int(),
  cost: z.number().optional(),
  metadata: z.unknown().optional(),
  user: z.unknown(),
  createdAt: z.date()
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