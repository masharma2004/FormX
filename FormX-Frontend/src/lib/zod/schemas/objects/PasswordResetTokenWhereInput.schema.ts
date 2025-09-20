import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const passwordresettokenwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => PasswordResetTokenWhereInputObjectSchema), z.lazy(() => PasswordResetTokenWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PasswordResetTokenWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PasswordResetTokenWhereInputObjectSchema), z.lazy(() => PasswordResetTokenWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  token: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  expiresAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  used: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional()
}).strict();
export const PasswordResetTokenWhereInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenWhereInput> = passwordresettokenwhereinputSchema as unknown as z.ZodType<Prisma.PasswordResetTokenWhereInput>;
export const PasswordResetTokenWhereInputObjectZodSchema = passwordresettokenwhereinputSchema;
