import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { SubmissionUncheckedUpdateManyWithoutFormNestedInputObjectSchema as SubmissionUncheckedUpdateManyWithoutFormNestedInputObjectSchema } from './SubmissionUncheckedUpdateManyWithoutFormNestedInput.schema';
import { FormScriptUncheckedUpdateManyWithoutFormNestedInputObjectSchema as FormScriptUncheckedUpdateManyWithoutFormNestedInputObjectSchema } from './FormScriptUncheckedUpdateManyWithoutFormNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  schema: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  settings: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPublic: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  submissions: z.lazy(() => SubmissionUncheckedUpdateManyWithoutFormNestedInputObjectSchema).optional(),
  scripts: z.lazy(() => FormScriptUncheckedUpdateManyWithoutFormNestedInputObjectSchema).optional()
}).strict();
export const FormUncheckedUpdateWithoutNocodbTableInputObjectSchema: z.ZodType<Prisma.FormUncheckedUpdateWithoutNocodbTableInput> = makeSchema() as unknown as z.ZodType<Prisma.FormUncheckedUpdateWithoutNocodbTableInput>;
export const FormUncheckedUpdateWithoutNocodbTableInputObjectZodSchema = makeSchema();
