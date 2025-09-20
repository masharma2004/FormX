import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  schema: z.literal(true).optional(),
  settings: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  isPublic: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const FormCountAggregateInputObjectSchema: z.ZodType<Prisma.FormCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FormCountAggregateInputType>;
export const FormCountAggregateInputObjectZodSchema = makeSchema();
