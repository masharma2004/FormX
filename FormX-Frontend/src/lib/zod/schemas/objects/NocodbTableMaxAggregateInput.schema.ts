import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tableId: z.literal(true).optional(),
  formId: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const NocodbTableMaxAggregateInputObjectSchema: z.ZodType<Prisma.NocodbTableMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableMaxAggregateInputType>;
export const NocodbTableMaxAggregateInputObjectZodSchema = makeSchema();
