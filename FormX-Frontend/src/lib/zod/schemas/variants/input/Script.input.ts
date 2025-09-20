import * as z from 'zod';
// prettier-ignore
export const ScriptInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    code: z.string(),
    description: z.string().optional().nullable(),
    userId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    user: z.unknown(),
    formScripts: z.array(z.unknown())
}).strict().partial();

export type ScriptInputType = z.infer<typeof ScriptInputSchema>;
