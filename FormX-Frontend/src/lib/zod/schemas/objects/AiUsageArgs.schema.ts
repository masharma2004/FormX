import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AiUsageSelectObjectSchema as AiUsageSelectObjectSchema } from './AiUsageSelect.schema';
import { AiUsageIncludeObjectSchema as AiUsageIncludeObjectSchema } from './AiUsageInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => AiUsageSelectObjectSchema).optional(),
  include: z.lazy(() => AiUsageIncludeObjectSchema).optional()
}).strict();
export const AiUsageArgsObjectSchema = makeSchema();
export const AiUsageArgsObjectZodSchema = makeSchema();
