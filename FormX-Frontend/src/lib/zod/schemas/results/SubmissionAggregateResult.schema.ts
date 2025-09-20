import * as z from 'zod';
export const SubmissionAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    data: z.number(),
    metadata: z.number(),
    status: z.number(),
    createdAt: z.number(),
    formId: z.number(),
    userId: z.number(),
    form: z.number(),
    user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    status: z.string().nullable(),
    createdAt: z.date().nullable(),
    formId: z.string().nullable(),
    userId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    status: z.string().nullable(),
    createdAt: z.date().nullable(),
    formId: z.string().nullable(),
    userId: z.string().nullable()
  }).nullable().optional()});