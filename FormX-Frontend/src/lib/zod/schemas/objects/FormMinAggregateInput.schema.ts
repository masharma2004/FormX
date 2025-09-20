import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  description: z.literal(true).optional(),
  isActive: z.literal(true).optional(),
  isPublic: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional()
}).strict();
export const FormMinAggregateInputObjectSchema: z.ZodType<Prisma.FormMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FormMinAggregateInputType>;
export const FormMinAggregateInputObjectZodSchema = makeSchema();
