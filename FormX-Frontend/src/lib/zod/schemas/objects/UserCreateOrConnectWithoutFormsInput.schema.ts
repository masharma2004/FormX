import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutFormsInputObjectSchema as UserCreateWithoutFormsInputObjectSchema } from './UserCreateWithoutFormsInput.schema';
import { UserUncheckedCreateWithoutFormsInputObjectSchema as UserUncheckedCreateWithoutFormsInputObjectSchema } from './UserUncheckedCreateWithoutFormsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutFormsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFormsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutFormsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutFormsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutFormsInput>;
export const UserCreateOrConnectWithoutFormsInputObjectZodSchema = makeSchema();
