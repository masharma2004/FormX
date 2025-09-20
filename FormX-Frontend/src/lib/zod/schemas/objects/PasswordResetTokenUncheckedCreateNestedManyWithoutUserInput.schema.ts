import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PasswordResetTokenCreateWithoutUserInputObjectSchema as PasswordResetTokenCreateWithoutUserInputObjectSchema } from './PasswordResetTokenCreateWithoutUserInput.schema';
import { PasswordResetTokenUncheckedCreateWithoutUserInputObjectSchema as PasswordResetTokenUncheckedCreateWithoutUserInputObjectSchema } from './PasswordResetTokenUncheckedCreateWithoutUserInput.schema';
import { PasswordResetTokenCreateOrConnectWithoutUserInputObjectSchema as PasswordResetTokenCreateOrConnectWithoutUserInputObjectSchema } from './PasswordResetTokenCreateOrConnectWithoutUserInput.schema';
import { PasswordResetTokenCreateManyUserInputEnvelopeObjectSchema as PasswordResetTokenCreateManyUserInputEnvelopeObjectSchema } from './PasswordResetTokenCreateManyUserInputEnvelope.schema';
import { PasswordResetTokenWhereUniqueInputObjectSchema as PasswordResetTokenWhereUniqueInputObjectSchema } from './PasswordResetTokenWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => PasswordResetTokenCreateWithoutUserInputObjectSchema), z.lazy(() => PasswordResetTokenCreateWithoutUserInputObjectSchema).array(), z.lazy(() => PasswordResetTokenUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => PasswordResetTokenUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => PasswordResetTokenCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => PasswordResetTokenCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => PasswordResetTokenCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => PasswordResetTokenWhereUniqueInputObjectSchema), z.lazy(() => PasswordResetTokenWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const PasswordResetTokenUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput>;
export const PasswordResetTokenUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
