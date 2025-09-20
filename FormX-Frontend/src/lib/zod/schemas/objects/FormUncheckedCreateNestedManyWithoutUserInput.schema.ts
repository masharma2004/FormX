import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormCreateWithoutUserInputObjectSchema as FormCreateWithoutUserInputObjectSchema } from './FormCreateWithoutUserInput.schema';
import { FormUncheckedCreateWithoutUserInputObjectSchema as FormUncheckedCreateWithoutUserInputObjectSchema } from './FormUncheckedCreateWithoutUserInput.schema';
import { FormCreateOrConnectWithoutUserInputObjectSchema as FormCreateOrConnectWithoutUserInputObjectSchema } from './FormCreateOrConnectWithoutUserInput.schema';
import { FormCreateManyUserInputEnvelopeObjectSchema as FormCreateManyUserInputEnvelopeObjectSchema } from './FormCreateManyUserInputEnvelope.schema';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './FormWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FormCreateWithoutUserInputObjectSchema), z.lazy(() => FormCreateWithoutUserInputObjectSchema).array(), z.lazy(() => FormUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => FormUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FormCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => FormCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FormCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FormWhereUniqueInputObjectSchema), z.lazy(() => FormWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FormUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.FormUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FormUncheckedCreateNestedManyWithoutUserInput>;
export const FormUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
