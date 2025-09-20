import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FormUpdateManyWithoutUserNestedInputObjectSchema as FormUpdateManyWithoutUserNestedInputObjectSchema } from './FormUpdateManyWithoutUserNestedInput.schema';
import { AiUsageUpdateManyWithoutUserNestedInputObjectSchema as AiUsageUpdateManyWithoutUserNestedInputObjectSchema } from './AiUsageUpdateManyWithoutUserNestedInput.schema';
import { SubmissionUpdateManyWithoutUserNestedInputObjectSchema as SubmissionUpdateManyWithoutUserNestedInputObjectSchema } from './SubmissionUpdateManyWithoutUserNestedInput.schema';
import { PasswordResetTokenUpdateManyWithoutUserNestedInputObjectSchema as PasswordResetTokenUpdateManyWithoutUserNestedInputObjectSchema } from './PasswordResetTokenUpdateManyWithoutUserNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  settings: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  forms: z.lazy(() => FormUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  aiUsage: z.lazy(() => AiUsageUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  submissions: z.lazy(() => SubmissionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  passwordResetTokens: z.lazy(() => PasswordResetTokenUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUpdateWithoutScriptsInputObjectSchema: z.ZodType<Prisma.UserUpdateWithoutScriptsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateWithoutScriptsInput>;
export const UserUpdateWithoutScriptsInputObjectZodSchema = makeSchema();
