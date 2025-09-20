import * as z from 'zod';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    email: z.string(),
    password: z.string(),
    name: z.string().optional().nullable(),
    settings: z.unknown().optional().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    forms: z.array(z.unknown()),
    scripts: z.array(z.unknown()),
    aiUsage: z.array(z.unknown()),
    submissions: z.array(z.unknown()),
    passwordResetTokens: z.array(z.unknown())
}).strict().partial();

export type UserInputType = z.infer<typeof UserInputSchema>;
