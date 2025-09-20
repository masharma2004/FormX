import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutAiUsageInputObjectSchema as UserUpdateWithoutAiUsageInputObjectSchema } from './UserUpdateWithoutAiUsageInput.schema';
import { UserUncheckedUpdateWithoutAiUsageInputObjectSchema as UserUncheckedUpdateWithoutAiUsageInputObjectSchema } from './UserUncheckedUpdateWithoutAiUsageInput.schema';
import { UserCreateWithoutAiUsageInputObjectSchema as UserCreateWithoutAiUsageInputObjectSchema } from './UserCreateWithoutAiUsageInput.schema';
import { UserUncheckedCreateWithoutAiUsageInputObjectSchema as UserUncheckedCreateWithoutAiUsageInputObjectSchema } from './UserUncheckedCreateWithoutAiUsageInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutAiUsageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAiUsageInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutAiUsageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAiUsageInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutAiUsageInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutAiUsageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutAiUsageInput>;
export const UserUpsertWithoutAiUsageInputObjectZodSchema = makeSchema();
