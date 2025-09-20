import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutFormsInputObjectSchema as UserUpdateWithoutFormsInputObjectSchema } from './UserUpdateWithoutFormsInput.schema';
import { UserUncheckedUpdateWithoutFormsInputObjectSchema as UserUncheckedUpdateWithoutFormsInputObjectSchema } from './UserUncheckedUpdateWithoutFormsInput.schema';
import { UserCreateWithoutFormsInputObjectSchema as UserCreateWithoutFormsInputObjectSchema } from './UserCreateWithoutFormsInput.schema';
import { UserUncheckedCreateWithoutFormsInputObjectSchema as UserUncheckedCreateWithoutFormsInputObjectSchema } from './UserUncheckedCreateWithoutFormsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutFormsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFormsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutFormsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutFormsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutFormsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutFormsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutFormsInput>;
export const UserUpsertWithoutFormsInputObjectZodSchema = makeSchema();
