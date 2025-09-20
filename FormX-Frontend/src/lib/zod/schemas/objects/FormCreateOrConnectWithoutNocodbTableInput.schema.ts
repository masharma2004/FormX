import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './FormWhereUniqueInput.schema';
import { FormCreateWithoutNocodbTableInputObjectSchema as FormCreateWithoutNocodbTableInputObjectSchema } from './FormCreateWithoutNocodbTableInput.schema';
import { FormUncheckedCreateWithoutNocodbTableInputObjectSchema as FormUncheckedCreateWithoutNocodbTableInputObjectSchema } from './FormUncheckedCreateWithoutNocodbTableInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FormCreateWithoutNocodbTableInputObjectSchema), z.lazy(() => FormUncheckedCreateWithoutNocodbTableInputObjectSchema)])
}).strict();
export const FormCreateOrConnectWithoutNocodbTableInputObjectSchema: z.ZodType<Prisma.FormCreateOrConnectWithoutNocodbTableInput> = makeSchema() as unknown as z.ZodType<Prisma.FormCreateOrConnectWithoutNocodbTableInput>;
export const FormCreateOrConnectWithoutNocodbTableInputObjectZodSchema = makeSchema();
