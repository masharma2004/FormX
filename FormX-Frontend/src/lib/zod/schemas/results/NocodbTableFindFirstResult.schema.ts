import * as z from 'zod';
export const NocodbTableFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  tableId: z.string(),
  formId: z.string(),
  form: z.unknown(),
  metadata: z.unknown().optional(),
  createdAt: z.date()
}));