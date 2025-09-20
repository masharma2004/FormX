import * as z from 'zod';
// prettier-ignore
export const SubmissionInputSchema = z.object({
    id: z.string(),
    data: z.unknown(),
    metadata: z.unknown().optional().nullable(),
    status: z.string(),
    createdAt: z.date(),
    formId: z.string(),
    userId: z.string().optional().nullable(),
    form: z.unknown(),
    user: z.unknown().optional().nullable()
}).strict().partial();

export type SubmissionInputType = z.infer<typeof SubmissionInputSchema>;
