import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutPasswordResetTokensInputObjectSchema as UserCreateWithoutPasswordResetTokensInputObjectSchema } from './UserCreateWithoutPasswordResetTokensInput.schema';
import { UserUncheckedCreateWithoutPasswordResetTokensInputObjectSchema as UserUncheckedCreateWithoutPasswordResetTokensInputObjectSchema } from './UserUncheckedCreateWithoutPasswordResetTokensInput.schema';
import { UserCreateOrConnectWithoutPasswordResetTokensInputObjectSchema as UserCreateOrConnectWithoutPasswordResetTokensInputObjectSchema } from './UserCreateOrConnectWithoutPasswordResetTokensInput.schema';
import { UserUpsertWithoutPasswordResetTokensInputObjectSchema as UserUpsertWithoutPasswordResetTokensInputObjectSchema } from './UserUpsertWithoutPasswordResetTokensInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPasswordResetTokensInputObjectSchema as UserUpdateToOneWithWhereWithoutPasswordResetTokensInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPasswordResetTokensInput.schema';
import { UserUpdateWithoutPasswordResetTokensInputObjectSchema as UserUpdateWithoutPasswordResetTokensInputObjectSchema } from './UserUpdateWithoutPasswordResetTokensInput.schema';
import { UserUncheckedUpdateWithoutPasswordResetTokensInputObjectSchema as UserUncheckedUpdateWithoutPasswordResetTokensInputObjectSchema } from './UserUncheckedUpdateWithoutPasswordResetTokensInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPasswordResetTokensInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPasswordResetTokensInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPasswordResetTokensInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPasswordResetTokensInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPasswordResetTokensInputObjectSchema), z.lazy(() => UserUpdateWithoutPasswordResetTokensInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPasswordResetTokensInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutPasswordResetTokensNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput>;
export const UserUpdateOneRequiredWithoutPasswordResetTokensNestedInputObjectZodSchema = makeSchema();
