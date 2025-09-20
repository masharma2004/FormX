import * as z from 'zod';
export const FormAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    title: z.number(),
    description: z.number(),
    schema: z.number(),
    settings: z.number(),
    isActive: z.number(),
    isPublic: z.number(),
    userId: z.number(),
    user: z.number(),
    submissions: z.number(),
    scripts: z.number(),
    nocodbTable: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    userId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()});