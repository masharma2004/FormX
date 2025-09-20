import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutAiUsageInputObjectSchema as UserUpdateWithoutAiUsageInputObjectSchema } from './UserUpdateWithoutAiUsageInput.schema';
import { UserUncheckedUpdateWithoutAiUsageInputObjectSchema as UserUncheckedUpdateWithoutAiUsageInputObjectSchema } from './UserUncheckedUpdateWithoutAiUsageInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutAiUsageInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutAiUsageInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutAiUsageInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAiUsageInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutAiUsageInput>;
export const UserUpdateToOneWithWhereWithoutAiUsageInputObjectZodSchema = makeSchema();
