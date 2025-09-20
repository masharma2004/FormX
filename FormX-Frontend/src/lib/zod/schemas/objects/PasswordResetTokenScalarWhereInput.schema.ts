import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema'

const passwordresettokenscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PasswordResetTokenScalarWhereInputObjectSchema), z.lazy(() => PasswordResetTokenScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PasswordResetTokenScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PasswordResetTokenScalarWhereInputObjectSchema), z.lazy(() => PasswordResetTokenScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  used: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const PasswordResetTokenScalarWhereInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenScalarWhereInput> = passwordresettokenscalarwhereinputSchema as unknown as z.ZodType<Prisma.PasswordResetTokenScalarWhereInput>;
export const PasswordResetTokenScalarWhereInputObjectZodSchema = passwordresettokenscalarwhereinputSchema;
