import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutSubmissionsInputObjectSchema as UserCreateWithoutSubmissionsInputObjectSchema } from './UserCreateWithoutSubmissionsInput.schema';
import { UserUncheckedCreateWithoutSubmissionsInputObjectSchema as UserUncheckedCreateWithoutSubmissionsInputObjectSchema } from './UserUncheckedCreateWithoutSubmissionsInput.schema';
import { UserCreateOrConnectWithoutSubmissionsInputObjectSchema as UserCreateOrConnectWithoutSubmissionsInputObjectSchema } from './UserCreateOrConnectWithoutSubmissionsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSubmissionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSubmissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSubmissionsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutSubmissionsInput>;
export const UserCreateNestedOneWithoutSubmissionsInputObjectZodSchema = makeSchema();
