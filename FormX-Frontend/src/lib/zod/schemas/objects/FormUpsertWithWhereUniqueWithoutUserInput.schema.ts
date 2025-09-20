import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './FormWhereUniqueInput.schema';
import { FormUpdateWithoutUserInputObjectSchema as FormUpdateWithoutUserInputObjectSchema } from './FormUpdateWithoutUserInput.schema';
import { FormUncheckedUpdateWithoutUserInputObjectSchema as FormUncheckedUpdateWithoutUserInputObjectSchema } from './FormUncheckedUpdateWithoutUserInput.schema';
import { FormCreateWithoutUserInputObjectSchema as FormCreateWithoutUserInputObjectSchema } from './FormCreateWithoutUserInput.schema';
import { FormUncheckedCreateWithoutUserInputObjectSchema as FormUncheckedCreateWithoutUserInputObjectSchema } from './FormUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FormUpdateWithoutUserInputObjectSchema), z.lazy(() => FormUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => FormCreateWithoutUserInputObjectSchema), z.lazy(() => FormUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const FormUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.FormUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FormUpsertWithWhereUniqueWithoutUserInput>;
export const FormUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
