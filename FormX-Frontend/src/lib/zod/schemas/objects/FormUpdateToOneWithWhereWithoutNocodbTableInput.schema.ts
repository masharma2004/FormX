import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './FormWhereInput.schema';
import { FormUpdateWithoutNocodbTableInputObjectSchema as FormUpdateWithoutNocodbTableInputObjectSchema } from './FormUpdateWithoutNocodbTableInput.schema';
import { FormUncheckedUpdateWithoutNocodbTableInputObjectSchema as FormUncheckedUpdateWithoutNocodbTableInputObjectSchema } from './FormUncheckedUpdateWithoutNocodbTableInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => FormUpdateWithoutNocodbTableInputObjectSchema), z.lazy(() => FormUncheckedUpdateWithoutNocodbTableInputObjectSchema)])
}).strict();
export const FormUpdateToOneWithWhereWithoutNocodbTableInputObjectSchema: z.ZodType<Prisma.FormUpdateToOneWithWhereWithoutNocodbTableInput> = makeSchema() as unknown as z.ZodType<Prisma.FormUpdateToOneWithWhereWithoutNocodbTableInput>;
export const FormUpdateToOneWithWhereWithoutNocodbTableInputObjectZodSchema = makeSchema();
