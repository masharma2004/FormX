import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormCreateWithoutSubmissionsInputObjectSchema as FormCreateWithoutSubmissionsInputObjectSchema } from './FormCreateWithoutSubmissionsInput.schema';
import { FormUncheckedCreateWithoutSubmissionsInputObjectSchema as FormUncheckedCreateWithoutSubmissionsInputObjectSchema } from './FormUncheckedCreateWithoutSubmissionsInput.schema';
import { FormCreateOrConnectWithoutSubmissionsInputObjectSchema as FormCreateOrConnectWithoutSubmissionsInputObjectSchema } from './FormCreateOrConnectWithoutSubmissionsInput.schema';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './FormWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FormCreateWithoutSubmissionsInputObjectSchema), z.lazy(() => FormUncheckedCreateWithoutSubmissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FormCreateOrConnectWithoutSubmissionsInputObjectSchema).optional(),
  connect: z.lazy(() => FormWhereUniqueInputObjectSchema).optional()
}).strict();
export const FormCreateNestedOneWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.FormCreateNestedOneWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.FormCreateNestedOneWithoutSubmissionsInput>;
export const FormCreateNestedOneWithoutSubmissionsInputObjectZodSchema = makeSchema();
