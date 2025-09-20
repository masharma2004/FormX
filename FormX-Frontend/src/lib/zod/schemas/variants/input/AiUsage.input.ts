import * as z from 'zod';
// prettier-ignore
export const AiUsageInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    operation: z.string(),
    model: z.string(),
    date: z.date(),
    tokensUsed: z.number().int(),
    cost: z.number().optional().nullable(),
    metadata: z.unknown().optional().nullable(),
    user: z.unknown(),
    createdAt: z.date()
}).strict().partial();

export type AiUsageInputType = z.infer<typeof AiUsageInputSchema>;
