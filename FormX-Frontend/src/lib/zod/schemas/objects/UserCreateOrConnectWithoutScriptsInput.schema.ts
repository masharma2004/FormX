import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutScriptsInputObjectSchema as UserCreateWithoutScriptsInputObjectSchema } from './UserCreateWithoutScriptsInput.schema';
import { UserUncheckedCreateWithoutScriptsInputObjectSchema as UserUncheckedCreateWithoutScriptsInputObjectSchema } from './UserUncheckedCreateWithoutScriptsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutScriptsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutScriptsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutScriptsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutScriptsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutScriptsInput>;
export const UserCreateOrConnectWithoutScriptsInputObjectZodSchema = makeSchema();
