import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutFormsInputObjectSchema as UserCreateWithoutFormsInputObjectSchema } from './UserCreateWithoutFormsInput.schema';
import { UserUncheckedCreateWithoutFormsInputObjectSchema as UserUncheckedCreateWithoutFormsInputObjectSchema } from './UserUncheckedCreateWithoutFormsInput.schema';
import { UserCreateOrConnectWithoutFormsInputObjectSchema as UserCreateOrConnectWithoutFormsInputObjectSchema } from './UserCreateOrConnectWithoutFormsInput.schema';
import { UserUpsertWithoutFormsInputObjectSchema as UserUpsertWithoutFormsInputObjectSchema } from './UserUpsertWithoutFormsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutFormsInputObjectSchema as UserUpdateToOneWithWhereWithoutFormsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutFormsInput.schema';
import { UserUpdateWithoutFormsInputObjectSchema as UserUpdateWithoutFormsInputObjectSchema } from './UserUpdateWithoutFormsInput.schema';
import { UserUncheckedUpdateWithoutFormsInputObjectSchema as UserUncheckedUpdateWithoutFormsInputObjectSchema } from './UserUncheckedUpdateWithoutFormsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutFormsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFormsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutFormsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutFormsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutFormsInputObjectSchema), z.lazy(() => UserUpdateWithoutFormsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFormsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutFormsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutFormsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutFormsNestedInput>;
export const UserUpdateOneRequiredWithoutFormsNestedInputObjectZodSchema = makeSchema();
