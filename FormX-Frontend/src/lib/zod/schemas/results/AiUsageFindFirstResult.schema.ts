import * as z from 'zod';
export const AiUsageFindFirstResultSchema = z.nullable(z.object({
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
}));