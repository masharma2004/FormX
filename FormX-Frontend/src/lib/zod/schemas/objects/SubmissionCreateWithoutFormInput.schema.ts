import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { UserCreateNestedOneWithoutSubmissionsInputObjectSchema as UserCreateNestedOneWithoutSubmissionsInputObjectSchema } from './UserCreateNestedOneWithoutSubmissionsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  data: z.union([JsonNullValueInputSchema, jsonSchema]),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  status: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSubmissionsInputObjectSchema).optional()
}).strict();
export const SubmissionCreateWithoutFormInputObjectSchema: z.ZodType<Prisma.SubmissionCreateWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionCreateWithoutFormInput>;
export const SubmissionCreateWithoutFormInputObjectZodSchema = makeSchema();
