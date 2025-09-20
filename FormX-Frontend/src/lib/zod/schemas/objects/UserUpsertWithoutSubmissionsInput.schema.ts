import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutSubmissionsInputObjectSchema as UserUpdateWithoutSubmissionsInputObjectSchema } from './UserUpdateWithoutSubmissionsInput.schema';
import { UserUncheckedUpdateWithoutSubmissionsInputObjectSchema as UserUncheckedUpdateWithoutSubmissionsInputObjectSchema } from './UserUncheckedUpdateWithoutSubmissionsInput.schema';
import { UserCreateWithoutSubmissionsInputObjectSchema as UserCreateWithoutSubmissionsInputObjectSchema } from './UserCreateWithoutSubmissionsInput.schema';
import { UserUncheckedCreateWithoutSubmissionsInputObjectSchema as UserUncheckedCreateWithoutSubmissionsInputObjectSchema } from './UserUncheckedCreateWithoutSubmissionsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutSubmissionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSubmissionsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutSubmissionsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutSubmissionsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutSubmissionsInput>;
export const UserUpsertWithoutSubmissionsInputObjectZodSchema = makeSchema();
