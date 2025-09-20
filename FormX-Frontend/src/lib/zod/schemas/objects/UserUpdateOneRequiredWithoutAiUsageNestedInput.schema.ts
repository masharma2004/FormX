import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutAiUsageInputObjectSchema as UserCreateWithoutAiUsageInputObjectSchema } from './UserCreateWithoutAiUsageInput.schema';
import { UserUncheckedCreateWithoutAiUsageInputObjectSchema as UserUncheckedCreateWithoutAiUsageInputObjectSchema } from './UserUncheckedCreateWithoutAiUsageInput.schema';
import { UserCreateOrConnectWithoutAiUsageInputObjectSchema as UserCreateOrConnectWithoutAiUsageInputObjectSchema } from './UserCreateOrConnectWithoutAiUsageInput.schema';
import { UserUpsertWithoutAiUsageInputObjectSchema as UserUpsertWithoutAiUsageInputObjectSchema } from './UserUpsertWithoutAiUsageInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutAiUsageInputObjectSchema as UserUpdateToOneWithWhereWithoutAiUsageInputObjectSchema } from './UserUpdateToOneWithWhereWithoutAiUsageInput.schema';
import { UserUpdateWithoutAiUsageInputObjectSchema as UserUpdateWithoutAiUsageInputObjectSchema } from './UserUpdateWithoutAiUsageInput.schema';
import { UserUncheckedUpdateWithoutAiUsageInputObjectSchema as UserUncheckedUpdateWithoutAiUsageInputObjectSchema } from './UserUncheckedUpdateWithoutAiUsageInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAiUsageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAiUsageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAiUsageInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAiUsageInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutAiUsageInputObjectSchema), z.lazy(() => UserUpdateWithoutAiUsageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAiUsageInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutAiUsageNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAiUsageNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutAiUsageNestedInput>;
export const UserUpdateOneRequiredWithoutAiUsageNestedInputObjectZodSchema = makeSchema();
