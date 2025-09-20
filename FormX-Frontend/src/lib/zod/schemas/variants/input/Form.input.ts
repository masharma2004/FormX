import * as z from 'zod';
// prettier-ignore
export const FormInputSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().optional().nullable(),
    schema: z.unknown(),
    settings: z.unknown().optional().nullable(),
    isActive: z.boolean(),
    isPublic: z.boolean(),
    userId: z.string(),
    user: z.unknown(),
    submissions: z.array(z.unknown()),
    scripts: z.array(z.unknown()),
    nocodbTable: z.unknown().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict().partial();

export type FormInputType = z.infer<typeof FormInputSchema>;
