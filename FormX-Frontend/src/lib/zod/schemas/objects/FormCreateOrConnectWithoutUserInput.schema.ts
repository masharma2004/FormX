import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './FormWhereUniqueInput.schema';
import { FormCreateWithoutUserInputObjectSchema as FormCreateWithoutUserInputObjectSchema } from './FormCreateWithoutUserInput.schema';
import { FormUncheckedCreateWithoutUserInputObjectSchema as FormUncheckedCreateWithoutUserInputObjectSchema } from './FormUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FormCreateWithoutUserInputObjectSchema), z.lazy(() => FormUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const FormCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.FormCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FormCreateOrConnectWithoutUserInput>;
export const FormCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
