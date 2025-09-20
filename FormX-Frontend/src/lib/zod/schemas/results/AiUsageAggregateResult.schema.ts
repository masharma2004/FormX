import * as z from 'zod';
export const AiUsageAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    userId: z.number(),
    operation: z.number(),
    model: z.number(),
    date: z.number(),
    tokensUsed: z.number(),
    cost: z.number(),
    metadata: z.number(),
    user: z.number(),
    createdAt: z.number()
  }).optional(),
  _sum: z.object({
    tokensUsed: z.number().nullable(),
    cost: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    tokensUsed: z.number().nullable(),
    cost: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    operation: z.string().nullable(),
    model: z.string().nullable(),
    date: z.date().nullable(),
    tokensUsed: z.number().int().nullable(),
    cost: z.number().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    operation: z.string().nullable(),
    model: z.string().nullable(),
    date: z.date().nullable(),
    tokensUsed: z.number().int().nullable(),
    cost: z.number().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()});