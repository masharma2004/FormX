import * as z from 'zod';
export const FormScriptGroupByResultSchema = z.array(z.object({
  id: z.string(),
  event: z.string(),
  order: z.number().int(),
  enabled: z.boolean(),
  formId: z.string(),
  scriptId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    event: z.number(),
    order: z.number(),
    enabled: z.number(),
    formId: z.number(),
    scriptId: z.number(),
    form: z.number(),
    script: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    order: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    order: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    event: z.string().nullable(),
    order: z.number().int().nullable(),
    formId: z.string().nullable(),
    scriptId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    event: z.string().nullable(),
    order: z.number().int().nullable(),
    formId: z.string().nullable(),
    scriptId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));