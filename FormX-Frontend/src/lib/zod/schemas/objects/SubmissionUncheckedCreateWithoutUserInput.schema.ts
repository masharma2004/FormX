import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  data: z.union([JsonNullValueInputSchema, jsonSchema]),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  status: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  formId: z.string()
}).strict();
export const SubmissionUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.SubmissionUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUncheckedCreateWithoutUserInput>;
export const SubmissionUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
