import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './FormWhereUniqueInput.schema';
import { FormCreateWithoutSubmissionsInputObjectSchema as FormCreateWithoutSubmissionsInputObjectSchema } from './FormCreateWithoutSubmissionsInput.schema';
import { FormUncheckedCreateWithoutSubmissionsInputObjectSchema as FormUncheckedCreateWithoutSubmissionsInputObjectSchema } from './FormUncheckedCreateWithoutSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FormCreateWithoutSubmissionsInputObjectSchema), z.lazy(() => FormUncheckedCreateWithoutSubmissionsInputObjectSchema)])
}).strict();
export const FormCreateOrConnectWithoutSubmissionsInputObjectSchema: z.ZodType<Prisma.FormCreateOrConnectWithoutSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.FormCreateOrConnectWithoutSubmissionsInput>;
export const FormCreateOrConnectWithoutSubmissionsInputObjectZodSchema = makeSchema();
