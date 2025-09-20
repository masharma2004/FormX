import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutSubmissionsInputObjectSchema as UserUpdateWithoutSubmissionsInputObjectSchema } from './UserUpdateWithoutSubmissionsInput.schema';
import { UserUncheckedUpdateWithoutSubmissionsInputObjectSchema as UserUncheckedUpdateWithoutSubmissionsInputObjectSchema } from './UserUncheckedUpdateWithoutSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutSubmissionsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutSubmissionsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSubmissionsInput>;
export const UserUpdateToOneWithWhereWithoutSubmissionsInputObjectZodSchema = makeSchema();
