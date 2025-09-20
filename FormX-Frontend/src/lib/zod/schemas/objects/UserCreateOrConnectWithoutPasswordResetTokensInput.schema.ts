import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPasswordResetTokensInputObjectSchema as UserCreateWithoutPasswordResetTokensInputObjectSchema } from './UserCreateWithoutPasswordResetTokensInput.schema';
import { UserUncheckedCreateWithoutPasswordResetTokensInputObjectSchema as UserUncheckedCreateWithoutPasswordResetTokensInputObjectSchema } from './UserUncheckedCreateWithoutPasswordResetTokensInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPasswordResetTokensInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPasswordResetTokensInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPasswordResetTokensInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPasswordResetTokensInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutPasswordResetTokensInput>;
export const UserCreateOrConnectWithoutPasswordResetTokensInputObjectZodSchema = makeSchema();
