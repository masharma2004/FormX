import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { FormCreateNestedOneWithoutNocodbTableInputObjectSchema as FormCreateNestedOneWithoutNocodbTableInputObjectSchema } from './FormCreateNestedOneWithoutNocodbTableInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  tableId: z.string(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  form: z.lazy(() => FormCreateNestedOneWithoutNocodbTableInputObjectSchema)
}).strict();
export const NocodbTableCreateInputObjectSchema: z.ZodType<Prisma.NocodbTableCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableCreateInput>;
export const NocodbTableCreateInputObjectZodSchema = makeSchema();
