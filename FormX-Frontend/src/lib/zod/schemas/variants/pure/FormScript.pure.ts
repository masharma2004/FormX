import * as z from 'zod';
// prettier-ignore
export const FormScriptModelSchema = z.object({
    id: z.string(),
    event: z.string(),
    order: z.number().int(),
    enabled: z.boolean(),
    formId: z.string(),
    scriptId: z.string(),
    form: z.unknown(),
    script: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type FormScriptPureType = z.infer<typeof FormScriptModelSchema>;
