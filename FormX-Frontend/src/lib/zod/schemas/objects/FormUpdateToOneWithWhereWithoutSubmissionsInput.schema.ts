import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './FormWhereInput.schema';
import { FormUpdateWithoutSubmissionsInputObjectSchema as FormUpdateWithoutSubmissionsInputObjectSchema } from './FormUpdateWithoutSubmissionsInput.schema';
import { FormUncheckedUpdateWithoutSubmissionsInputObjectSchema as FormUncheckedUpdateWithoutSubmissionsInputObjectSchema } from './FormUncheckedUpdateWithoutSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => FormUpdateWithoutSubmissionsInputObjectSchema), z.lazy(() => FormUncheckedUpdateWithoutSubmissionsInputObjectSchema)])
}).strict();
export const FormUpdateToOneWithWhereWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.FormUpdateToOneWithWhereWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.FormUpdateToOneWithWhereWithoutSubmissionsInput>;
export const FormUpdateToOneWithWhereWithoutSubmissionsInputObjectZodSchema = makeSchema();
