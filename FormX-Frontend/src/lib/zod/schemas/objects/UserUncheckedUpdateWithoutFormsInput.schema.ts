import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ScriptUncheckedUpdateManyWithoutUserNestedInputObjectSchema as ScriptUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './ScriptUncheckedUpdateManyWithoutUserNestedInput.schema';
import { AiUsageUncheckedUpdateManyWithoutUserNestedInputObjectSchema as AiUsageUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './AiUsageUncheckedUpdateManyWithoutUserNestedInput.schema';
import { SubmissionUncheckedUpdateManyWithoutUserNestedInputObjectSchema as SubmissionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './SubmissionUncheckedUpdateManyWithoutUserNestedInput.schema';
import { PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInputObjectSchema as PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from './PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  password: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  settings: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  scripts: z.lazy(() => ScriptUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  aiUsage: z.lazy(() => AiUsageUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  submissions: z.lazy(() => SubmissionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  passwordResetTokens: z.lazy(() => PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional()
}).strict();
export const UserUncheckedUpdateWithoutFormsInputObjectSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutFormsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedUpdateWithoutFormsInput>;
export const UserUncheckedUpdateWithoutFormsInputObjectZodSchema = makeSchema();
