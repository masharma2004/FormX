import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PasswordResetTokenWhereInputObjectSchema as PasswordResetTokenWhereInputObjectSchema } from './PasswordResetTokenWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PasswordResetTokenWhereInputObjectSchema).optional()
}).strict();
export const UserCountOutputTypeCountPasswordResetTokensArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountPasswordResetTokensArgsObjectZodSchema = makeSchema();
