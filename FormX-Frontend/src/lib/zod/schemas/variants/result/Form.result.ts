import * as z from 'zod';
// prettier-ignore
export const FormResultSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().nullable(),
    schema: z.unknown(),
    settings: z.unknown().nullable(),
    isActive: z.boolean(),
    isPublic: z.boolean(),
    userId: z.string(),
    user: z.unknown(),
    submissions: z.array(z.unknown()),
    scripts: z.array(z.unknown()),
    nocodbTable: z.unknown().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type FormResultType = z.infer<typeof FormResultSchema>;
