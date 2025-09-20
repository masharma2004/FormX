import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormCreateWithoutNocodbTableInputObjectSchema as FormCreateWithoutNocodbTableInputObjectSchema } from './FormCreateWithoutNocodbTableInput.schema';
import { FormUncheckedCreateWithoutNocodbTableInputObjectSchema as FormUncheckedCreateWithoutNocodbTableInputObjectSchema } from './FormUncheckedCreateWithoutNocodbTableInput.schema';
import { FormCreateOrConnectWithoutNocodbTableInputObjectSchema as FormCreateOrConnectWithoutNocodbTableInputObjectSchema } from './FormCreateOrConnectWithoutNocodbTableInput.schema';
import { FormUpsertWithoutNocodbTableInputObjectSchema as FormUpsertWithoutNocodbTableInputObjectSchema } from './FormUpsertWithoutNocodbTableInput.schema';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './FormWhereUniqueInput.schema';
import { FormUpdateToOneWithWhereWithoutNocodbTableInputObjectSchema as FormUpdateToOneWithWhereWithoutNocodbTableInputObjectSchema } from './FormUpdateToOneWithWhereWithoutNocodbTableInput.schema';
import { FormUpdateWithoutNocodbTableInputObjectSchema as FormUpdateWithoutNocodbTableInputObjectSchema } from './FormUpdateWithoutNocodbTableInput.schema';
import { FormUncheckedUpdateWithoutNocodbTableInputObjectSchema as FormUncheckedUpdateWithoutNocodbTableInputObjectSchema } from './FormUncheckedUpdateWithoutNocodbTableInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FormCreateWithoutNocodbTableInputObjectSchema), z.lazy(() => FormUncheckedCreateWithoutNocodbTableInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FormCreateOrConnectWithoutNocodbTableInputObjectSchema).optional(),
  upsert: z.lazy(() => FormUpsertWithoutNocodbTableInputObjectSchema).optional(),
  connect: z.lazy(() => FormWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => FormUpdateToOneWithWhereWithoutNocodbTableInputObjectSchema), z.lazy(() => FormUpdateWithoutNocodbTableInputObjectSchema), z.lazy(() => FormUncheckedUpdateWithoutNocodbTableInputObjectSchema)]).optional()
}).strict();
export const FormUpdateOneRequiredWithoutNocodbTableNestedInputObjectSchema: z.ZodType<Prisma.FormUpdateOneRequiredWithoutNocodbTableNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FormUpdateOneRequiredWithoutNocodbTableNestedInput>;
export const FormUpdateOneRequiredWithoutNocodbTableNestedInputObjectZodSchema = makeSchema();
