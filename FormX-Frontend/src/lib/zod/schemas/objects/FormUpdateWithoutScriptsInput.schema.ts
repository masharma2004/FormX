import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema as NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutFormsNestedInputObjectSchema as UserUpdateOneRequiredWithoutFormsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutFormsNestedInput.schema';
import { SubmissionUpdateManyWithoutFormNestedInputObjectSchema as SubmissionUpdateManyWithoutFormNestedInputObjectSchema } from './SubmissionUpdateManyWithoutFormNestedInput.schema';
import { NocodbTableUpdateOneWithoutFormNestedInputObjectSchema as NocodbTableUpdateOneWithoutFormNestedInputObjectSchema } from './NocodbTableUpdateOneWithoutFormNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)]).optional().nullable(),
  schema: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  settings: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  isActive: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  isPublic: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutFormsNestedInputObjectSchema).optional(),
  submissions: z.lazy(() => SubmissionUpdateManyWithoutFormNestedInputObjectSchema).optional(),
  nocodbTable: z.lazy(() => NocodbTableUpdateOneWithoutFormNestedInputObjectSchema).optional()
}).strict();
export const FormUpdateWithoutScriptsInputObjectSchema: z.ZodType<Prisma.FormUpdateWithoutScriptsInput> = makeSchema() as unknown as z.ZodType<Prisma.FormUpdateWithoutScriptsInput>;
export const FormUpdateWithoutScriptsInputObjectZodSchema = makeSchema();
