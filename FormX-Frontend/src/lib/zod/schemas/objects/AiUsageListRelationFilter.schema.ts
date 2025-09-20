import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AiUsageWhereInputObjectSchema as AiUsageWhereInputObjectSchema } from './AiUsageWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => AiUsageWhereInputObjectSchema).optional(),
  some: z.lazy(() => AiUsageWhereInputObjectSchema).optional(),
  none: z.lazy(() => AiUsageWhereInputObjectSchema).optional()
}).strict();
export const AiUsageListRelationFilterObjectSchema: z.ZodType<Prisma.AiUsageListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageListRelationFilter>;
export const AiUsageListRelationFilterObjectZodSchema = makeSchema();
