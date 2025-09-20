import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { UserCreateNestedOneWithoutFormsInputObjectSchema as UserCreateNestedOneWithoutFormsInputObjectSchema } from './UserCreateNestedOneWithoutFormsInput.schema';
import { SubmissionCreateNestedManyWithoutFormInputObjectSchema as SubmissionCreateNestedManyWithoutFormInputObjectSchema } from './SubmissionCreateNestedManyWithoutFormInput.schema';
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
  user: z.lazy(() => UserCreateNestedOneWithoutFormsInputObjectSchema),
  submissions: z.lazy(() => SubmissionCreateNestedManyWithoutFormInputObjectSchema).optional(),
  scripts: z.lazy(() => FormScriptCreateNestedManyWithoutFormInputObjectSchema).optional(),
  nocodbTable: z.lazy(() => NocodbTableCreateNestedOneWithoutFormInputObjectSchema).optional()
}).strict();
export const FormCreateInputObjectSchema: z.ZodType<Prisma.FormCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.FormCreateInput>;
export const FormCreateInputObjectZodSchema = makeSchema();
