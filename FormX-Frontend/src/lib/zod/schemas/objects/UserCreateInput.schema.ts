import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { FormCreateNestedManyWithoutUserInputObjectSchema as FormCreateNestedManyWithoutUserInputObjectSchema } from './FormCreateNestedManyWithoutUserInput.schema';
import { ScriptCreateNestedManyWithoutUserInputObjectSchema as ScriptCreateNestedManyWithoutUserInputObjectSchema } from './ScriptCreateNestedManyWithoutUserInput.schema';
import { AiUsageCreateNestedManyWithoutUserInputObjectSchema as AiUsageCreateNestedManyWithoutUserInputObjectSchema } from './AiUsageCreateNestedManyWithoutUserInput.schema';
import { SubmissionCreateNestedManyWithoutUserInputObjectSchema as SubmissionCreateNestedManyWithoutUserInputObjectSchema } from './SubmissionCreateNestedManyWithoutUserInput.schema';
import { PasswordResetTokenCreateNestedManyWithoutUserInputObjectSchema as PasswordResetTokenCreateNestedManyWithoutUserInputObjectSchema } from './PasswordResetTokenCreateNestedManyWithoutUserInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  settings: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  forms: z.lazy(() => FormCreateNestedManyWithoutUserInputObjectSchema).optional(),
  scripts: z.lazy(() => ScriptCreateNestedManyWithoutUserInputObjectSchema).optional(),
  aiUsage: z.lazy(() => AiUsageCreateNestedManyWithoutUserInputObjectSchema).optional(),
  submissions: z.lazy(() => SubmissionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  passwordResetTokens: z.lazy(() => PasswordResetTokenCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
