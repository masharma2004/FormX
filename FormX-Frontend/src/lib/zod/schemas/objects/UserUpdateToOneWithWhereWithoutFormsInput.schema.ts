import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutFormsInputObjectSchema as UserUpdateWithoutFormsInputObjectSchema } from './UserUpdateWithoutFormsInput.schema';
import { UserUncheckedUpdateWithoutFormsInputObjectSchema as UserUncheckedUpdateWithoutFormsInputObjectSchema } from './UserUncheckedUpdateWithoutFormsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutFormsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutFormsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutFormsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFormsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutFormsInput>;
export const UserUpdateToOneWithWhereWithoutFormsInputObjectZodSchema = makeSchema();
