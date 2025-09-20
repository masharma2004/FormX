import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { FormCreateNestedManyWithoutUserInputObjectSchema as FormCreateNestedManyWithoutUserInputObjectSchema } from './FormCreateNestedManyWithoutUserInput.schema';
import { ScriptCreateNestedManyWithoutUserInputObjectSchema as ScriptCreateNestedManyWithoutUserInputObjectSchema } from './ScriptCreateNestedManyWithoutUserInput.schema';
import { AiUsageCreateNestedManyWithoutUserInputObjectSchema as AiUsageCreateNestedManyWithoutUserInputObjectSchema } from './AiUsageCreateNestedManyWithoutUserInput.schema';
import { PasswordResetTokenCreateNestedManyWithoutUserInputObjectSchema as PasswordResetTokenCreateNestedManyWithoutUserInputObjectSchema } from './PasswordResetTokenCreateNestedManyWithoutUserInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  settings: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  forms: z.lazy(() => FormCreateNestedManyWithoutUserInputObjectSchema).optional(),
  scripts: z.lazy(() => ScriptCreateNestedManyWithoutUserInputObjectSchema).optional(),
  aiUsage: z.lazy(() => AiUsageCreateNestedManyWithoutUserInputObjectSchema).optional(),
  passwordResetTokens: z.lazy(() => PasswordResetTokenCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutSubmissionsInput>;
export const UserCreateWithoutSubmissionsInputObjectZodSchema = makeSchema();
