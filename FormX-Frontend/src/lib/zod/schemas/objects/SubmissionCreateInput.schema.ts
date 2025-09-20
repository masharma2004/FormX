import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { FormCreateNestedOneWithoutSubmissionsInputObjectSchema as FormCreateNestedOneWithoutSubmissionsInputObjectSchema } from './FormCreateNestedOneWithoutSubmissionsInput.schema';
import { UserCreateNestedOneWithoutSubmissionsInputObjectSchema as UserCreateNestedOneWithoutSubmissionsInputObjectSchema } from './UserCreateNestedOneWithoutSubmissionsInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  data: z.union([JsonNullValueInputSchema, jsonSchema]),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  status: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  form: z.lazy(() => FormCreateNestedOneWithoutSubmissionsInputObjectSchema),
  user: z.lazy(() => UserCreateNestedOneWithoutSubmissionsInputObjectSchema).optional()
}).strict();
export const SubmissionCreateInputObjectSchema: z.ZodType<Prisma.SubmissionCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionCreateInput>;
export const SubmissionCreateInputObjectZodSchema = makeSchema();
