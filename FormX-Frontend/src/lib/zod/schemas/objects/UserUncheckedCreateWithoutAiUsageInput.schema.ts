import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { FormUncheckedCreateNestedManyWithoutUserInputObjectSchema as FormUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './FormUncheckedCreateNestedManyWithoutUserInput.schema';
import { ScriptUncheckedCreateNestedManyWithoutUserInputObjectSchema as ScriptUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ScriptUncheckedCreateNestedManyWithoutUserInput.schema';
import { SubmissionUncheckedCreateNestedManyWithoutUserInputObjectSchema as SubmissionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './SubmissionUncheckedCreateNestedManyWithoutUserInput.schema';
import { PasswordResetTokenUncheckedCreateNestedManyWithoutUserInputObjectSchema as PasswordResetTokenUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  settings: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  forms: z.lazy(() => FormUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  scripts: z.lazy(() => ScriptUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  submissions: z.lazy(() => SubmissionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  passwordResetTokens: z.lazy(() => PasswordResetTokenUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutAiUsageInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutAiUsageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutAiUsageInput>;
export const UserUncheckedCreateWithoutAiUsageInputObjectZodSchema = makeSchema();
