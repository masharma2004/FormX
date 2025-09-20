import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { UserCreateNestedOneWithoutFormsInputObjectSchema as UserCreateNestedOneWithoutFormsInputObjectSchema } from './UserCreateNestedOneWithoutFormsInput.schema';
import { FormScriptCreateNestedManyWithoutFormInputObjectSchema as FormScriptCreateNestedManyWithoutFormInputObjectSchema } from './FormScriptCreateNestedManyWithoutFormInput.schema';
import { NocodbTableCreateNestedOneWithoutFormInputObjectSchema as NocodbTableCreateNestedOneWithoutFormInputObjectSchema } from './NocodbTableCreateNestedOneWithoutFormInput.schema'

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
  user: z.lazy(() => UserCreateNestedOneWithoutFormsInputObjectSchema),
  scripts: z.lazy(() => FormScriptCreateNestedManyWithoutFormInputObjectSchema).optional(),
  nocodbTable: z.lazy(() => NocodbTableCreateNestedOneWithoutFormInputObjectSchema).optional()
}).strict();
export const FormCreateWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.FormCreateWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.FormCreateWithoutSubmissionsInput>;
export const FormCreateWithoutSubmissionsInputObjectZodSchema = makeSchema();
