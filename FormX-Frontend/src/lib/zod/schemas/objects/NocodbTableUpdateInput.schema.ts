import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FormUpdateOneRequiredWithoutNocodbTableNestedInputObjectSchema as FormUpdateOneRequiredWithoutNocodbTableNestedInputObjectSchema } from './FormUpdateOneRequiredWithoutNocodbTableNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  tableId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  form: z.lazy(() => FormUpdateOneRequiredWithoutNocodbTableNestedInputObjectSchema).optional()
}).strict();
export const NocodbTableUpdateInputObjectSchema: z.ZodType<Prisma.NocodbTableUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableUpdateInput>;
export const NocodbTableUpdateInputObjectZodSchema = makeSchema();
