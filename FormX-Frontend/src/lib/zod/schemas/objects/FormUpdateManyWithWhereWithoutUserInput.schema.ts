import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScalarWhereInputObjectSchema as FormScalarWhereInputObjectSchema } from './FormScalarWhereInput.schema';
import { FormUpdateManyMutationInputObjectSchema as FormUpdateManyMutationInputObjectSchema } from './FormUpdateManyMutationInput.schema';
import { FormUncheckedUpdateManyWithoutUserInputObjectSchema as FormUncheckedUpdateManyWithoutUserInputObjectSchema } from './FormUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FormUpdateManyMutationInputObjectSchema), z.lazy(() => FormUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const FormUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.FormUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FormUpdateManyWithWhereWithoutUserInput>;
export const FormUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
