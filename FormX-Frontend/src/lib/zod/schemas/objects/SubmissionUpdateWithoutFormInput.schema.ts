import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { NullableJsonNullValueInputSchema } from '../enums/NullableJsonNullValueInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneWithoutSubmissionsNestedInputObjectSchema as UserUpdateOneWithoutSubmissionsNestedInputObjectSchema } from './UserUpdateOneWithoutSubmissionsNestedInput.schema'

import { JsonValueSchema as jsonSchema } from '../../helpers/json-helpers';

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  data: z.union([JsonNullValueInputSchema, jsonSchema]).optional(),
  metadata: z.union([NullableJsonNullValueInputSchema, jsonSchema]).optional(),
  status: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutSubmissionsNestedInputObjectSchema).optional()
}).strict();
export const SubmissionUpdateWithoutFormInputObjectSchema: z.ZodType<Prisma.SubmissionUpdateWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionUpdateWithoutFormInput>;
export const SubmissionUpdateWithoutFormInputObjectZodSchema = makeSchema();
