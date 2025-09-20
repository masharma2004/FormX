import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { FloatNullableWithAggregatesFilterObjectSchema as FloatNullableWithAggregatesFilterObjectSchema } from './FloatNullableWithAggregatesFilter.schema';
import { JsonNullableWithAggregatesFilterObjectSchema as JsonNullableWithAggregatesFilterObjectSchema } from './JsonNullableWithAggregatesFilter.schema'

const aiusagescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => AiUsageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AiUsageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AiUsageScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AiUsageScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => AiUsageScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  operation: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  model: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  tokensUsed: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  cost: z.union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableWithAggregatesFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AiUsageScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.AiUsageScalarWhereWithAggregatesInput> = aiusagescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.AiUsageScalarWhereWithAggregatesInput>;
export const AiUsageScalarWhereWithAggregatesInputObjectZodSchema = aiusagescalarwherewithaggregatesinputSchema;
