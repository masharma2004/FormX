import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutSubmissionsInputObjectSchema as UserCreateWithoutSubmissionsInputObjectSchema } from './UserCreateWithoutSubmissionsInput.schema';
import { UserUncheckedCreateWithoutSubmissionsInputObjectSchema as UserUncheckedCreateWithoutSubmissionsInputObjectSchema } from './UserUncheckedCreateWithoutSubmissionsInput.schema';
import { UserCreateOrConnectWithoutSubmissionsInputObjectSchema as UserCreateOrConnectWithoutSubmissionsInputObjectSchema } from './UserCreateOrConnectWithoutSubmissionsInput.schema';
import { UserUpsertWithoutSubmissionsInputObjectSchema as UserUpsertWithoutSubmissionsInputObjectSchema } from './UserUpsertWithoutSubmissionsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutSubmissionsInputObjectSchema as UserUpdateToOneWithWhereWithoutSubmissionsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutSubmissionsInput.schema';
import { UserUpdateWithoutSubmissionsInputObjectSchema as UserUpdateWithoutSubmissionsInputObjectSchema } from './UserUpdateWithoutSubmissionsInput.schema';
import { UserUncheckedUpdateWithoutSubmissionsInputObjectSchema as UserUncheckedUpdateWithoutSubmissionsInputObjectSchema } from './UserUncheckedUpdateWithoutSubmissionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutSubmissionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSubmissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSubmissionsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSubmissionsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutSubmissionsInputObjectSchema), z.lazy(() => UserUpdateWithoutSubmissionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSubmissionsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneWithoutSubmissionsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneWithoutSubmissionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneWithoutSubmissionsNestedInput>;
export const UserUpdateOneWithoutSubmissionsNestedInputObjectZodSchema = makeSchema();
