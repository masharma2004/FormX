import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PasswordResetTokenWhereUniqueInputObjectSchema as PasswordResetTokenWhereUniqueInputObjectSchema } from './PasswordResetTokenWhereUniqueInput.schema';
import { PasswordResetTokenUpdateWithoutUserInputObjectSchema as PasswordResetTokenUpdateWithoutUserInputObjectSchema } from './PasswordResetTokenUpdateWithoutUserInput.schema';
import { PasswordResetTokenUncheckedUpdateWithoutUserInputObjectSchema as PasswordResetTokenUncheckedUpdateWithoutUserInputObjectSchema } from './PasswordResetTokenUncheckedUpdateWithoutUserInput.schema';
import { PasswordResetTokenCreateWithoutUserInputObjectSchema as PasswordResetTokenCreateWithoutUserInputObjectSchema } from './PasswordResetTokenCreateWithoutUserInput.schema';
import { PasswordResetTokenUncheckedCreateWithoutUserInputObjectSchema as PasswordResetTokenUncheckedCreateWithoutUserInputObjectSchema } from './PasswordResetTokenUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PasswordResetTokenWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => PasswordResetTokenUpdateWithoutUserInputObjectSchema), z.lazy(() => PasswordResetTokenUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => PasswordResetTokenCreateWithoutUserInputObjectSchema), z.lazy(() => PasswordResetTokenUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const PasswordResetTokenUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput>;
export const PasswordResetTokenUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
