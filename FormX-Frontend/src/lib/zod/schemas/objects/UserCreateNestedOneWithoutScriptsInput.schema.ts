import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutScriptsInputObjectSchema as UserCreateWithoutScriptsInputObjectSchema } from './UserCreateWithoutScriptsInput.schema';
import { UserUncheckedCreateWithoutScriptsInputObjectSchema as UserUncheckedCreateWithoutScriptsInputObjectSchema } from './UserUncheckedCreateWithoutScriptsInput.schema';
import { UserCreateOrConnectWithoutScriptsInputObjectSchema as UserCreateOrConnectWithoutScriptsInputObjectSchema } from './UserCreateOrConnectWithoutScriptsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutScriptsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutScriptsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutScriptsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutScriptsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutScriptsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutScriptsInput>;
export const UserCreateNestedOneWithoutScriptsInputObjectZodSchema = makeSchema();
