import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema'

const passwordresettokenscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PasswordResetTokenScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PasswordResetTokenScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PasswordResetTokenScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PasswordResetTokenScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PasswordResetTokenScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  token: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  used: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const PasswordResetTokenScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenScalarWhereWithAggregatesInput> = passwordresettokenscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.PasswordResetTokenScalarWhereWithAggregatesInput>;
export const PasswordResetTokenScalarWhereWithAggregatesInputObjectZodSchema = passwordresettokenscalarwherewithaggregatesinputSchema;
