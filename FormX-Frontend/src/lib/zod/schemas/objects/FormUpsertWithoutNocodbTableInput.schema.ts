import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormUpdateWithoutNocodbTableInputObjectSchema as FormUpdateWithoutNocodbTableInputObjectSchema } from './FormUpdateWithoutNocodbTableInput.schema';
import { FormUncheckedUpdateWithoutNocodbTableInputObjectSchema as FormUncheckedUpdateWithoutNocodbTableInputObjectSchema } from './FormUncheckedUpdateWithoutNocodbTableInput.schema';
import { FormCreateWithoutNocodbTableInputObjectSchema as FormCreateWithoutNocodbTableInputObjectSchema } from './FormCreateWithoutNocodbTableInput.schema';
import { FormUncheckedCreateWithoutNocodbTableInputObjectSchema as FormUncheckedCreateWithoutNocodbTableInputObjectSchema } from './FormUncheckedCreateWithoutNocodbTableInput.schema';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './FormWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => FormUpdateWithoutNocodbTableInputObjectSchema), z.lazy(() => FormUncheckedUpdateWithoutNocodbTableInputObjectSchema)]),
  create: z.union([z.lazy(() => FormCreateWithoutNocodbTableInputObjectSchema), z.lazy(() => FormUncheckedCreateWithoutNocodbTableInputObjectSchema)]),
  where: z.lazy(() => FormWhereInputObjectSchema).optional()
}).strict();
export const FormUpsertWithoutNocodbTableInputObjectSchema: z.ZodType<Prisma.FormUpsertWithoutNocodbTableInput> = makeSchema() as unknown as z.ZodType<Prisma.FormUpsertWithoutNocodbTableInput>;
export const FormUpsertWithoutNocodbTableInputObjectZodSchema = makeSchema();
