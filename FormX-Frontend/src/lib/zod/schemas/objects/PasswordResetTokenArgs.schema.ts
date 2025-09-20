import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PasswordResetTokenSelectObjectSchema as PasswordResetTokenSelectObjectSchema } from './PasswordResetTokenSelect.schema';
import { PasswordResetTokenIncludeObjectSchema as PasswordResetTokenIncludeObjectSchema } from './PasswordResetTokenInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => PasswordResetTokenSelectObjectSchema).optional(),
  include: z.lazy(() => PasswordResetTokenIncludeObjectSchema).optional()
}).strict();
export const PasswordResetTokenArgsObjectSchema = makeSchema();
export const PasswordResetTokenArgsObjectZodSchema = makeSchema();
