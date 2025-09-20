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
export const FormMaxAggregateInputObjectSchema: z.ZodType<Prisma.FormMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FormMaxAggregateInputType>;
export const FormMaxAggregateInputObjectZodSchema = makeSchema();
