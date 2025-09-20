import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { FormUpdateOneRequiredWithoutSubmissionsNestedInputObjectSchema as FormUpdateOneRequiredWithoutSubmissionsNestedInputObjectSchema } from './FormUpdateOneRequiredWithoutSubmissionsNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  data: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  form: z.lazy(() => FormUpdateOneRequiredWithoutSubmissionsNestedInputObjectSchema).optional()
}).strict();
export const SubmissionUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.SubmissionUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpdateWithoutUserInput>;
export const SubmissionUpdateWithoutUserInputObjectZodSchema = makeSchema();
