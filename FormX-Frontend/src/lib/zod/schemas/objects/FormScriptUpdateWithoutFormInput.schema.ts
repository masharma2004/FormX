import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ScriptUpdateOneRequiredWithoutFormScriptsNestedInputObjectSchema as ScriptUpdateOneRequiredWithoutFormScriptsNestedInputObjectSchema } from './ScriptUpdateOneRequiredWithoutFormScriptsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  event: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  order: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  enabled: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  script: z.lazy(() => ScriptUpdateOneRequiredWithoutFormScriptsNestedInputObjectSchema).optional()
}).strict();
export const FormScriptUpdateWithoutFormInputObjectSchema: z.ZodType<Prisma.FormScriptUpdateWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptUpdateWithoutFormInput>;
export const FormScriptUpdateWithoutFormInputObjectZodSchema = makeSchema();
