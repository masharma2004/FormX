import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './FormWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountFormsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountFormsArgsObjectZodSchema = makeSchema();
