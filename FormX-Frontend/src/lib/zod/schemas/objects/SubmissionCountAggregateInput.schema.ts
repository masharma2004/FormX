import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  data: z.literal(true).optional(),
  metadata: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  formId: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SubmissionCountAggregateInputObjectSchema: z.ZodType<Prisma.SubmissionCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionCountAggregateInputType>;
export const SubmissionCountAggregateInputObjectZodSchema = makeSchema();
