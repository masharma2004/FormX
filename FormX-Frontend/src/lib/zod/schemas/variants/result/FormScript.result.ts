import * as z from 'zod';
// prettier-ignore
export const FormScriptResultSchema = z.object({
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

export type FormScriptResultType = z.infer<typeof FormScriptResultSchema>;
