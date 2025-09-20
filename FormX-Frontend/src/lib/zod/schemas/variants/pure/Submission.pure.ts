import * as z from 'zod';
// prettier-ignore
export const SubmissionModelSchema = z.object({
    id: z.string(),
    data: z.unknown(),
    metadata: z.unknown().nullable(),
    status: z.string(),
    createdAt: z.date(),
    formId: z.string(),
    userId: z.string().nullable(),
    form: z.unknown(),
    user: z.unknown().nullable()
}).strict();

export type SubmissionPureType = z.infer<typeof SubmissionModelSchema>;
