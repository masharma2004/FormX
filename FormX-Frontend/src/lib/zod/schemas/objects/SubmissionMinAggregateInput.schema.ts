import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  formId: z.literal(true).optional(),
  userId: z.literal(true).optional()
}).strict();
export const SubmissionMinAggregateInputObjectSchema: z.ZodType<Prisma.SubmissionMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionMinAggregateInputType>;
export const SubmissionMinAggregateInputObjectZodSchema = makeSchema();
