import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutScriptsInputObjectSchema as UserUpdateWithoutScriptsInputObjectSchema } from './UserUpdateWithoutScriptsInput.schema';
import { UserUncheckedUpdateWithoutScriptsInputObjectSchema as UserUncheckedUpdateWithoutScriptsInputObjectSchema } from './UserUncheckedUpdateWithoutScriptsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutScriptsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutScriptsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutScriptsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutScriptsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutScriptsInput>;
export const UserUpdateToOneWithWhereWithoutScriptsInputObjectZodSchema = makeSchema();
