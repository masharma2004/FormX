import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutFormsInputObjectSchema as UserCreateWithoutFormsInputObjectSchema } from './UserCreateWithoutFormsInput.schema';
import { UserUncheckedCreateWithoutFormsInputObjectSchema as UserUncheckedCreateWithoutFormsInputObjectSchema } from './UserUncheckedCreateWithoutFormsInput.schema';
import { UserCreateOrConnectWithoutFormsInputObjectSchema as UserCreateOrConnectWithoutFormsInputObjectSchema } from './UserCreateOrConnectWithoutFormsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutFormsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFormsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFormsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutFormsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutFormsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutFormsInput>;
export const UserCreateNestedOneWithoutFormsInputObjectZodSchema = makeSchema();
