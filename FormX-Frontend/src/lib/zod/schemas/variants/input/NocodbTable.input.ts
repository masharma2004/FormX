import * as z from 'zod';
// prettier-ignore
export const NocodbTableInputSchema = z.object({
    id: z.string(),
    tableId: z.string(),
    formId: z.string(),
    form: z.unknown(),
    metadata: z.unknown().optional().nullable(),
    createdAt: z.date()
}).strict().partial();

export type NocodbTableInputType = z.infer<typeof NocodbTableInputSchema>;
