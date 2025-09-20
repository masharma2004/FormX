import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormCountOutputTypeSelectObjectSchema as FormCountOutputTypeSelectObjectSchema } from './FormCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FormCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const FormCountOutputTypeArgsObjectSchema = makeSchema();
export const FormCountOutputTypeArgsObjectZodSchema = makeSchema();
