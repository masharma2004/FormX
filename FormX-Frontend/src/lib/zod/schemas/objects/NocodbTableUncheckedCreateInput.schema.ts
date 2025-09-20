import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  tableId: z.string(),
  formId: z.string(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const NocodbTableUncheckedCreateInputObjectSchema: z.ZodType<Prisma.NocodbTableUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableUncheckedCreateInput>;
export const NocodbTableUncheckedCreateInputObjectZodSchema = makeSchema();
