import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SubmissionWhereInputObjectSchema as SubmissionWhereInputObjectSchema } from './SubmissionWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SubmissionWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountSubmissionsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountSubmissionsArgsObjectZodSchema = makeSchema();
