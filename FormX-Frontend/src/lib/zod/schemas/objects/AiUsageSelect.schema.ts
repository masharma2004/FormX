import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  operation: z.boolean().optional(),
  model: z.boolean().optional(),
  date: z.boolean().optional(),
  tokensUsed: z.boolean().optional(),
  cost: z.boolean().optional(),
  metadata: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional()
}).strict();
export const AiUsageSelectObjectSchema: z.ZodType<Prisma.AiUsageSelect> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageSelect>;
export const AiUsageSelectObjectZodSchema = makeSchema();
