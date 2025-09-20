import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { ScriptUncheckedCreateNestedManyWithoutUserInputObjectSchema as ScriptUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './ScriptUncheckedCreateNestedManyWithoutUserInput.schema';
import { AiUsageUncheckedCreateNestedManyWithoutUserInputObjectSchema as AiUsageUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './AiUsageUncheckedCreateNestedManyWithoutUserInput.schema';
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
  scripts: z.lazy(() => ScriptUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  aiUsage: z.lazy(() => AiUsageUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  submissions: z.lazy(() => SubmissionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  passwordResetTokens: z.lazy(() => PasswordResetTokenUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutFormsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutFormsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutFormsInput>;
export const UserUncheckedCreateWithoutFormsInputObjectZodSchema = makeSchema();
