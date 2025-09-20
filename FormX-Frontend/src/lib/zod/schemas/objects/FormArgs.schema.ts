import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormSelectObjectSchema as FormSelectObjectSchema } from './FormSelect.schema';
import { FormIncludeObjectSchema as FormIncludeObjectSchema } from './FormInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FormSelectObjectSchema).optional(),
  include: z.lazy(() => FormIncludeObjectSchema).optional()
}).strict();
export const FormArgsObjectSchema = makeSchema();
export const FormArgsObjectZodSchema = makeSchema();
