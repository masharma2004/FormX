import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FormScriptUpdateManyWithoutScriptNestedInputObjectSchema as FormScriptUpdateManyWithoutScriptNestedInputObjectSchema } from './FormScriptUpdateManyWithoutScriptNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  code: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  formScripts: z.lazy(() => FormScriptUpdateManyWithoutScriptNestedInputObjectSchema).optional()
}).strict();
export const ScriptUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.ScriptUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptUpdateWithoutUserInput>;
export const ScriptUpdateWithoutUserInputObjectZodSchema = makeSchema();
