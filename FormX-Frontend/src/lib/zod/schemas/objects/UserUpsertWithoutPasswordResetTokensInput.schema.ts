import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutPasswordResetTokensInputObjectSchema as UserUpdateWithoutPasswordResetTokensInputObjectSchema } from './UserUpdateWithoutPasswordResetTokensInput.schema';
import { UserUncheckedUpdateWithoutPasswordResetTokensInputObjectSchema as UserUncheckedUpdateWithoutPasswordResetTokensInputObjectSchema } from './UserUncheckedUpdateWithoutPasswordResetTokensInput.schema';
import { UserCreateWithoutPasswordResetTokensInputObjectSchema as UserCreateWithoutPasswordResetTokensInputObjectSchema } from './UserCreateWithoutPasswordResetTokensInput.schema';
import { UserUncheckedCreateWithoutPasswordResetTokensInputObjectSchema as UserUncheckedCreateWithoutPasswordResetTokensInputObjectSchema } from './UserUncheckedCreateWithoutPasswordResetTokensInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPasswordResetTokensInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPasswordResetTokensInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPasswordResetTokensInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPasswordResetTokensInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutPasswordResetTokensInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutPasswordResetTokensInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutPasswordResetTokensInput>;
export const UserUpsertWithoutPasswordResetTokensInputObjectZodSchema = makeSchema();
