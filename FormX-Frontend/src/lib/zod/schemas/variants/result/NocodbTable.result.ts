import * as z from 'zod';
// prettier-ignore
export const NocodbTableResultSchema = z.object({
    id: z.string(),
    tableId: z.string(),
    formId: z.string(),
    form: z.unknown(),
    metadata: z.unknown().nullable(),
    createdAt: z.date()
}).strict();

export type NocodbTableResultType = z.infer<typeof NocodbTableResultSchema>;
