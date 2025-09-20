import * as z from 'zod';
// prettier-ignore
export const NocodbTableModelSchema = z.object({
    id: z.string(),
    tableId: z.string(),
    formId: z.string(),
    form: z.unknown(),
    metadata: z.unknown().nullable(),
    createdAt: z.date()
}).strict();

export type NocodbTablePureType = z.infer<typeof NocodbTableModelSchema>;
