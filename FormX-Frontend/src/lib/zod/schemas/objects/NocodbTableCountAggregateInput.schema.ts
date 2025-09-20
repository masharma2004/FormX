import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tableId: z.literal(true).optional(),
  formId: z.literal(true).optional(),
  metadata: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const NocodbTableCountAggregateInputObjectSchema: z.ZodType<Prisma.NocodbTableCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableCountAggregateInputType>;
export const NocodbTableCountAggregateInputObjectZodSchema = makeSchema();
