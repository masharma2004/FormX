import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  tableId: z.literal(true).optional(),
  formId: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const NocodbTableMinAggregateInputObjectSchema: z.ZodType<Prisma.NocodbTableMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableMinAggregateInputType>;
export const NocodbTableMinAggregateInputObjectZodSchema = makeSchema();
