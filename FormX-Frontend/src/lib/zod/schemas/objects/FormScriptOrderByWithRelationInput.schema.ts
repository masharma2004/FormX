import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FormOrderByWithRelationInputObjectSchema as FormOrderByWithRelationInputObjectSchema } from './FormOrderByWithRelationInput.schema';
import { ScriptOrderByWithRelationInputObjectSchema as ScriptOrderByWithRelationInputObjectSchema } from './ScriptOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  event: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  enabled: SortOrderSchema.optional(),
  formId: SortOrderSchema.optional(),
  scriptId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  form: z.lazy(() => FormOrderByWithRelationInputObjectSchema).optional(),
  script: z.lazy(() => ScriptOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const FormScriptOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.FormScriptOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptOrderByWithRelationInput>;
export const FormScriptOrderByWithRelationInputObjectZodSchema = makeSchema();
