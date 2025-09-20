import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormUpdateWithoutSubmissionsInputObjectSchema as FormUpdateWithoutSubmissionsInputObjectSchema } from './FormUpdateWithoutSubmissionsInput.schema';
import { FormUncheckedUpdateWithoutSubmissionsInputObjectSchema as FormUncheckedUpdateWithoutSubmissionsInputObjectSchema } from './FormUncheckedUpdateWithoutSubmissionsInput.schema';
import { FormCreateWithoutSubmissionsInputObjectSchema as FormCreateWithoutSubmissionsInputObjectSchema } from './FormCreateWithoutSubmissionsInput.schema';
import { FormUncheckedCreateWithoutSubmissionsInputObjectSchema as FormUncheckedCreateWithoutSubmissionsInputObjectSchema } from './FormUncheckedCreateWithoutSubmissionsInput.schema';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './FormWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => FormUpdateWithoutSubmissionsInputObjectSchema), z.lazy(() => FormUncheckedUpdateWithoutSubmissionsInputObjectSchema)]),
  create: z.union([z.lazy(() => FormCreateWithoutSubmissionsInputObjectSchema), z.lazy(() => FormUncheckedCreateWithoutSubmissionsInputObjectSchema)]),
  where: z.lazy(() => FormWhereInputObjectSchema).optional()
}).strict();
export const FormUpsertWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.FormUpsertWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.FormUpsertWithoutSubmissionsInput>;
export const FormUpsertWithoutSubmissionsInputObjectZodSchema = makeSchema();
