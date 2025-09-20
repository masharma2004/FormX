import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  token: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  expiresAt: SortOrderSchema.optional(),
  used: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const PasswordResetTokenOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.PasswordResetTokenOrderByWithRelationInput>;
export const PasswordResetTokenOrderByWithRelationInputObjectZodSchema = makeSchema();
