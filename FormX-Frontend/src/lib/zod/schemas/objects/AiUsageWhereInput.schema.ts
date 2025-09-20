import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { FloatNullableFilterObjectSchema as FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { JsonNullableFilterObjectSchema as JsonNullableFilterObjectSchema } from './JsonNullableFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const aiusagewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => AiUsageWhereInputObjectSchema), z.lazy(() => AiUsageWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => AiUsageWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => AiUsageWhereInputObjectSchema), z.lazy(() => AiUsageWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  operation: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  model: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  tokensUsed: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  cost: z.union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableFilterObjectSchema).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const AiUsageWhereInputObjectSchema: z.ZodType<Prisma.AiUsageWhereInput> = aiusagewhereinputSchema as unknown as z.ZodType<Prisma.AiUsageWhereInput>;
export const AiUsageWhereInputObjectZodSchema = aiusagewhereinputSchema;
