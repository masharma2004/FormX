import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  operation: z.string(),
  model: z.string(),
  date: z.coerce.date(),
  tokensUsed: z.number().int().optional(),
  cost: z.number().optional().nullable(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const AiUsageCreateManyUserInputObjectSchema: z.ZodType<Prisma.AiUsageCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageCreateManyUserInput>;
export const AiUsageCreateManyUserInputObjectZodSchema = makeSchema();
