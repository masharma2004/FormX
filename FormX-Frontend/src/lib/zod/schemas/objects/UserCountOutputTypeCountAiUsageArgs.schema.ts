import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AiUsageWhereInputObjectSchema as AiUsageWhereInputObjectSchema } from './AiUsageWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiUsageWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountAiUsageArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountAiUsageArgsObjectZodSchema = makeSchema();
