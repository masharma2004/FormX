import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutAiUsageInputObjectSchema as UserCreateWithoutAiUsageInputObjectSchema } from './UserCreateWithoutAiUsageInput.schema';
import { UserUncheckedCreateWithoutAiUsageInputObjectSchema as UserUncheckedCreateWithoutAiUsageInputObjectSchema } from './UserUncheckedCreateWithoutAiUsageInput.schema';
import { UserCreateOrConnectWithoutAiUsageInputObjectSchema as UserCreateOrConnectWithoutAiUsageInputObjectSchema } from './UserCreateOrConnectWithoutAiUsageInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutAiUsageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAiUsageInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAiUsageInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutAiUsageInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAiUsageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutAiUsageInput>;
export const UserCreateNestedOneWithoutAiUsageInputObjectZodSchema = makeSchema();
