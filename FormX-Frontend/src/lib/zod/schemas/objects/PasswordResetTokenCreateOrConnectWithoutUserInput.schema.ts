import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PasswordResetTokenWhereUniqueInputObjectSchema as PasswordResetTokenWhereUniqueInputObjectSchema } from './PasswordResetTokenWhereUniqueInput.schema';
import { PasswordResetTokenCreateWithoutUserInputObjectSchema as PasswordResetTokenCreateWithoutUserInputObjectSchema } from './PasswordResetTokenCreateWithoutUserInput.schema';
import { PasswordResetTokenUncheckedCreateWithoutUserInputObjectSchema as PasswordResetTokenUncheckedCreateWithoutUserInputObjectSchema } from './PasswordResetTokenUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PasswordResetTokenWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PasswordResetTokenCreateWithoutUserInputObjectSchema), z.lazy(() => PasswordResetTokenUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const PasswordResetTokenCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PasswordResetTokenCreateOrConnectWithoutUserInput>;
export const PasswordResetTokenCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
