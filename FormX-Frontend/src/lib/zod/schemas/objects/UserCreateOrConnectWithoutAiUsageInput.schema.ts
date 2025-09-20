import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutAiUsageInputObjectSchema as UserCreateWithoutAiUsageInputObjectSchema } from './UserCreateWithoutAiUsageInput.schema';
import { UserUncheckedCreateWithoutAiUsageInputObjectSchema as UserUncheckedCreateWithoutAiUsageInputObjectSchema } from './UserUncheckedCreateWithoutAiUsageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutAiUsageInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutAiUsageInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutAiUsageInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutAiUsageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutAiUsageInput>;
export const UserCreateOrConnectWithoutAiUsageInputObjectZodSchema = makeSchema();
