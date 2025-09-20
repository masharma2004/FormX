import * as z from 'zod';
export const NocodbTableFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  tableId: z.string(),
  formId: z.string(),
  form: z.unknown(),
  metadata: z.unknown().optional(),
  createdAt: z.date()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});