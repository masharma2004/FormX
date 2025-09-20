import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormCreateWithoutNocodbTableInputObjectSchema as FormCreateWithoutNocodbTableInputObjectSchema } from './FormCreateWithoutNocodbTableInput.schema';
import { FormUncheckedCreateWithoutNocodbTableInputObjectSchema as FormUncheckedCreateWithoutNocodbTableInputObjectSchema } from './FormUncheckedCreateWithoutNocodbTableInput.schema';
import { FormCreateOrConnectWithoutNocodbTableInputObjectSchema as FormCreateOrConnectWithoutNocodbTableInputObjectSchema } from './FormCreateOrConnectWithoutNocodbTableInput.schema';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './FormWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FormCreateWithoutNocodbTableInputObjectSchema), z.lazy(() => FormUncheckedCreateWithoutNocodbTableInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FormCreateOrConnectWithoutNocodbTableInputObjectSchema).optional(),
  connect: z.lazy(() => FormWhereUniqueInputObjectSchema).optional()
}).strict();
export const FormCreateNestedOneWithoutNocodbTableInputObjectSchema: z.ZodType<Prisma.FormCreateNestedOneWithoutNocodbTableInput> = makeSchema() as unknown as z.ZodType<Prisma.FormCreateNestedOneWithoutNocodbTableInput>;
export const FormCreateNestedOneWithoutNocodbTableInputObjectZodSchema = makeSchema();
