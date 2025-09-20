import * as z from 'zod';
// prettier-ignore
export const ScriptModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    code: z.string(),
    description: z.string().nullable(),
    userId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    user: z.unknown(),
    formScripts: z.array(z.unknown())
}).strict();

export type ScriptPureType = z.infer<typeof ScriptModelSchema>;
