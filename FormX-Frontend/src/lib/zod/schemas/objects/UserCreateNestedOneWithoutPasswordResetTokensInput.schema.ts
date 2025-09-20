import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutPasswordResetTokensInputObjectSchema as UserCreateWithoutPasswordResetTokensInputObjectSchema } from './UserCreateWithoutPasswordResetTokensInput.schema';
import { UserUncheckedCreateWithoutPasswordResetTokensInputObjectSchema as UserUncheckedCreateWithoutPasswordResetTokensInputObjectSchema } from './UserUncheckedCreateWithoutPasswordResetTokensInput.schema';
import { UserCreateOrConnectWithoutPasswordResetTokensInputObjectSchema as UserCreateOrConnectWithoutPasswordResetTokensInputObjectSchema } from './UserCreateOrConnectWithoutPasswordResetTokensInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPasswordResetTokensInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPasswordResetTokensInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPasswordResetTokensInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutPasswordResetTokensInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPasswordResetTokensInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutPasswordResetTokensInput>;
export const UserCreateNestedOneWithoutPasswordResetTokensInputObjectZodSchema = makeSchema();
