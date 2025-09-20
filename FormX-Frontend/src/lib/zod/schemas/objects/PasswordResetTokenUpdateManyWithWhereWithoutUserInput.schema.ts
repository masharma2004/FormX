import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PasswordResetTokenScalarWhereInputObjectSchema as PasswordResetTokenScalarWhereInputObjectSchema } from './PasswordResetTokenScalarWhereInput.schema';
import { PasswordResetTokenUpdateManyMutationInputObjectSchema as PasswordResetTokenUpdateManyMutationInputObjectSchema } from './PasswordResetTokenUpdateManyMutationInput.schema';
import { PasswordResetTokenUncheckedUpdateManyWithoutUserInputObjectSchema as PasswordResetTokenUncheckedUpdateManyWithoutUserInputObjectSchema } from './PasswordResetTokenUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PasswordResetTokenScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PasswordResetTokenUpdateManyMutationInputObjectSchema), z.lazy(() => PasswordResetTokenUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const PasswordResetTokenUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.PasswordResetTokenUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.PasswordResetTokenUpdateManyWithWhereWithoutUserInput>;
export const PasswordResetTokenUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
