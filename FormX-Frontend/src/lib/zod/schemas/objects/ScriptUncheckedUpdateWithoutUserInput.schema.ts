import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FormScriptUncheckedUpdateManyWithoutScriptNestedInputObjectSchema as FormScriptUncheckedUpdateManyWithoutScriptNestedInputObjectSchema } from './FormScriptUncheckedUpdateManyWithoutScriptNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  formScripts: z.lazy(() => FormScriptUncheckedUpdateManyWithoutScriptNestedInputObjectSchema).optional()
}).strict();
export const ScriptUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.ScriptUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptUncheckedUpdateWithoutUserInput>;
export const ScriptUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
