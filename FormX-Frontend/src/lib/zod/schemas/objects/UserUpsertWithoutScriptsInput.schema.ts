import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutScriptsInputObjectSchema as UserUpdateWithoutScriptsInputObjectSchema } from './UserUpdateWithoutScriptsInput.schema';
import { UserUncheckedUpdateWithoutScriptsInputObjectSchema as UserUncheckedUpdateWithoutScriptsInputObjectSchema } from './UserUncheckedUpdateWithoutScriptsInput.schema';
import { UserCreateWithoutScriptsInputObjectSchema as UserCreateWithoutScriptsInputObjectSchema } from './UserCreateWithoutScriptsInput.schema';
import { UserUncheckedCreateWithoutScriptsInputObjectSchema as UserUncheckedCreateWithoutScriptsInputObjectSchema } from './UserUncheckedCreateWithoutScriptsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutScriptsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutScriptsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutScriptsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutScriptsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutScriptsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutScriptsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutScriptsInput>;
export const UserUpsertWithoutScriptsInputObjectZodSchema = makeSchema();
