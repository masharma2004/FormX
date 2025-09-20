import * as z from 'zod';
export const NocodbTableGroupByResultSchema = z.array(z.object({
  id: z.string(),
  tableId: z.string(),
  formId: z.string(),
  metadata: z.unknown(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    tableId: z.number(),
    formId: z.number(),
    form: z.number(),
    metadata: z.number(),
    createdAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    tableId: z.string().nullable(),
    formId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    tableId: z.string().nullable(),
    formId: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));