import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutScriptsInputObjectSchema as UserCreateWithoutScriptsInputObjectSchema } from './UserCreateWithoutScriptsInput.schema';
import { UserUncheckedCreateWithoutScriptsInputObjectSchema as UserUncheckedCreateWithoutScriptsInputObjectSchema } from './UserUncheckedCreateWithoutScriptsInput.schema';
import { UserCreateOrConnectWithoutScriptsInputObjectSchema as UserCreateOrConnectWithoutScriptsInputObjectSchema } from './UserCreateOrConnectWithoutScriptsInput.schema';
import { UserUpsertWithoutScriptsInputObjectSchema as UserUpsertWithoutScriptsInputObjectSchema } from './UserUpsertWithoutScriptsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutScriptsInputObjectSchema as UserUpdateToOneWithWhereWithoutScriptsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutScriptsInput.schema';
import { UserUpdateWithoutScriptsInputObjectSchema as UserUpdateWithoutScriptsInputObjectSchema } from './UserUpdateWithoutScriptsInput.schema';
import { UserUncheckedUpdateWithoutScriptsInputObjectSchema as UserUncheckedUpdateWithoutScriptsInputObjectSchema } from './UserUncheckedUpdateWithoutScriptsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutScriptsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutScriptsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutScriptsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutScriptsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutScriptsInputObjectSchema), z.lazy(() => UserUpdateWithoutScriptsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutScriptsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutScriptsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutScriptsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutScriptsNestedInput>;
export const UserUpdateOneRequiredWithoutScriptsNestedInputObjectZodSchema = makeSchema();
