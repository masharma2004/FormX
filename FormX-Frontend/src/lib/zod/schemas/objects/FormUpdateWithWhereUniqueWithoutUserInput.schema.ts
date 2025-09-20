import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './FormWhereUniqueInput.schema';
import { FormUpdateWithoutUserInputObjectSchema as FormUpdateWithoutUserInputObjectSchema } from './FormUpdateWithoutUserInput.schema';
import { FormUncheckedUpdateWithoutUserInputObjectSchema as FormUncheckedUpdateWithoutUserInputObjectSchema } from './FormUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FormUpdateWithoutUserInputObjectSchema), z.lazy(() => FormUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const FormUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.FormUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FormUpdateWithWhereUniqueWithoutUserInput>;
export const FormUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
