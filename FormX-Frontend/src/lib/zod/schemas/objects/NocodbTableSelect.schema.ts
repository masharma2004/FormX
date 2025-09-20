import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormArgsObjectSchema as FormArgsObjectSchema } from './FormArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  tableId: z.boolean().optional(),
  formId: z.boolean().optional(),
  form: z.union([z.boolean(), z.lazy(() => FormArgsObjectSchema)]).optional(),
  metadata: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
export const NocodbTableSelectObjectSchema: z.ZodType<Prisma.NocodbTableSelect> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableSelect>;
export const NocodbTableSelectObjectZodSchema = makeSchema();
