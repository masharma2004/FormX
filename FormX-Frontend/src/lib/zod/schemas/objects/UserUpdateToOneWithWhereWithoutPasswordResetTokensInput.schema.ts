import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPasswordResetTokensInputObjectSchema as UserUpdateWithoutPasswordResetTokensInputObjectSchema } from './UserUpdateWithoutPasswordResetTokensInput.schema';
import { UserUncheckedUpdateWithoutPasswordResetTokensInputObjectSchema as UserUncheckedUpdateWithoutPasswordResetTokensInputObjectSchema } from './UserUncheckedUpdateWithoutPasswordResetTokensInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPasswordResetTokensInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPasswordResetTokensInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutPasswordResetTokensInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPasswordResetTokensInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPasswordResetTokensInput>;
export const UserUpdateToOneWithWhereWithoutPasswordResetTokensInputObjectZodSchema = makeSchema();
