import * as z from 'zod';
export const FormScriptFindManyResultSchema = z.object({
  data: z.array(z.object({
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