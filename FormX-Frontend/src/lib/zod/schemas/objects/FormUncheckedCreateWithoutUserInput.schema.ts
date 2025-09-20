import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { SubmissionUncheckedCreateNestedManyWithoutFormInputObjectSchema as SubmissionUncheckedCreateNestedManyWithoutFormInputObjectSchema } from './SubmissionUncheckedCreateNestedManyWithoutFormInput.schema';
import { FormScriptUncheckedCreateNestedManyWithoutFormInputObjectSchema as FormScriptUncheckedCreateNestedManyWithoutFormInputObjectSchema } from './FormScriptUncheckedCreateNestedManyWithoutFormInput.schema';
import { NocodbTableUncheckedCreateNestedOneWithoutFormInputObjectSchema as NocodbTableUncheckedCreateNestedOneWithoutFormInputObjectSchema } from './NocodbTableUncheckedCreateNestedOneWithoutFormInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  schema: z.union([JsonNullValueInputSchema, jsonSchema]),
  settings: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  isActive: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  submissions: z.lazy(() => SubmissionUncheckedCreateNestedManyWithoutFormInputObjectSchema).optional(),
  scripts: z.lazy(() => FormScriptUncheckedCreateNestedManyWithoutFormInputObjectSchema).optional(),
  nocodbTable: z.lazy(() => NocodbTableUncheckedCreateNestedOneWithoutFormInputObjectSchema).optional()
}).strict();
export const FormUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.FormUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FormUncheckedCreateWithoutUserInput>;
export const FormUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
