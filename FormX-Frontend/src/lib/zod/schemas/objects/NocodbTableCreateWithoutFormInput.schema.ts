import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  tableId: z.string(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const NocodbTableCreateWithoutFormInputObjectSchema: z.ZodType<Prisma.NocodbTableCreateWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableCreateWithoutFormInput>;
export const NocodbTableCreateWithoutFormInputObjectZodSchema = makeSchema();
