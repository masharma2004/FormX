import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PasswordResetTokenWhereUniqueInputObjectSchema as PasswordResetTokenWhereUniqueInputObjectSchema } from './PasswordResetTokenWhereUniqueInput.schema';
import { PasswordResetTokenUpdateWithoutUserInputObjectSchema as PasswordResetTokenUpdateWithoutUserInputObjectSchema } from './PasswordResetTokenUpdateWithoutUserInput.schema';
import { PasswordResetTokenUncheckedUpdateWithoutUserInputObjectSchema as PasswordResetTokenUncheckedUpdateWithoutUserInputObjectSchema } from './PasswordResetTokenUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PasswordResetTokenWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PasswordResetTokenUpdateWithoutUserInputObjectSchema), z.lazy(() => PasswordResetTokenUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const PasswordResetTokenUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput>;
export const PasswordResetTokenUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
