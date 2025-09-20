import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutSubmissionsInputObjectSchema as UserCreateWithoutSubmissionsInputObjectSchema } from './UserCreateWithoutSubmissionsInput.schema';
import { UserUncheckedCreateWithoutSubmissionsInputObjectSchema as UserUncheckedCreateWithoutSubmissionsInputObjectSchema } from './UserUncheckedCreateWithoutSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutSubmissionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSubmissionsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutSubmissionsInput>;
export const UserCreateOrConnectWithoutSubmissionsInputObjectZodSchema = makeSchema();
