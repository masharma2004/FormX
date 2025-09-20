import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FormOrderByWithRelationInputObjectSchema as FormOrderByWithRelationInputObjectSchema } from './FormOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  tableId: SortOrderSchema.optional(),
  formId: SortOrderSchema.optional(),
  metadata: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  form: z.lazy(() => FormOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const NocodbTableOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.NocodbTableOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableOrderByWithRelationInput>;
export const NocodbTableOrderByWithRelationInputObjectZodSchema = makeSchema();
