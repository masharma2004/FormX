import * as z from 'zod';
export const FormScriptCreateResultSchema = z.object({
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
});