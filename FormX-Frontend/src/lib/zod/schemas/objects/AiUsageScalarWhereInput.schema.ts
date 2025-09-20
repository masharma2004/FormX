import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema'

const aiusagescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AiUsageScalarWhereInputObjectSchema), z.lazy(() => AiUsageScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AiUsageScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AiUsageScalarWhereInputObjectSchema), z.lazy(() => AiUsageScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  operation: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  model: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  tokensUsed: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  cost: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const AiUsageScalarWhereInputObjectSchema: z.ZodType<Prisma.AiUsageScalarWhereInput> = aiusagescalarwhereinputSchema as unknown as z.ZodType<Prisma.AiUsageScalarWhereInput>;
export const AiUsageScalarWhereInputObjectZodSchema = aiusagescalarwhereinputSchema;
