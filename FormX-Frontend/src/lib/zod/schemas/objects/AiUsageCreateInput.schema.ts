import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { UserCreateNestedOneWithoutAiUsageInputObjectSchema as UserCreateNestedOneWithoutAiUsageInputObjectSchema } from './UserCreateNestedOneWithoutAiUsageInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  operation: z.string(),
  model: z.string(),
  date: z.coerce.date(),
  tokensUsed: z.number().int().optional(),
  cost: z.number().optional().nullable(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutAiUsageInputObjectSchema)
}).strict();
export const AiUsageCreateInputObjectSchema: z.ZodType<Prisma.AiUsageCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageCreateInput>;
export const AiUsageCreateInputObjectZodSchema = makeSchema();
