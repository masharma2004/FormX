import * as z from 'zod';
// prettier-ignore
export const AiUsageResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    operation: z.string(),
    model: z.string(),
    date: z.date(),
    tokensUsed: z.number().int(),
    cost: z.number().nullable(),
    metadata: z.unknown().nullable(),
    user: z.unknown(),
    createdAt: z.date()
}).strict();

export type AiUsageResultType = z.infer<typeof AiUsageResultSchema>;
