import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormCreateWithoutSubmissionsInputObjectSchema as FormCreateWithoutSubmissionsInputObjectSchema } from './FormCreateWithoutSubmissionsInput.schema';
import { FormUncheckedCreateWithoutSubmissionsInputObjectSchema as FormUncheckedCreateWithoutSubmissionsInputObjectSchema } from './FormUncheckedCreateWithoutSubmissionsInput.schema';
import { FormCreateOrConnectWithoutSubmissionsInputObjectSchema as FormCreateOrConnectWithoutSubmissionsInputObjectSchema } from './FormCreateOrConnectWithoutSubmissionsInput.schema';
import { FormUpsertWithoutSubmissionsInputObjectSchema as FormUpsertWithoutSubmissionsInputObjectSchema } from './FormUpsertWithoutSubmissionsInput.schema';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './FormWhereUniqueInput.schema';
import { FormUpdateToOneWithWhereWithoutSubmissionsInputObjectSchema as FormUpdateToOneWithWhereWithoutSubmissionsInputObjectSchema } from './FormUpdateToOneWithWhereWithoutSubmissionsInput.schema';
import { FormUpdateWithoutSubmissionsInputObjectSchema as FormUpdateWithoutSubmissionsInputObjectSchema } from './FormUpdateWithoutSubmissionsInput.schema';
import { FormUncheckedUpdateWithoutSubmissionsInputObjectSchema as FormUncheckedUpdateWithoutSubmissionsInputObjectSchema } from './FormUncheckedUpdateWithoutSubmissionsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FormCreateWithoutSubmissionsInputObjectSchema), z.lazy(() => FormUncheckedCreateWithoutSubmissionsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FormCreateOrConnectWithoutSubmissionsInputObjectSchema).optional(),
  upsert: z.lazy(() => FormUpsertWithoutSubmissionsInputObjectSchema).optional(),
  connect: z.lazy(() => FormWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => FormUpdateToOneWithWhereWithoutSubmissionsInputObjectSchema), z.lazy(() => FormUpdateWithoutSubmissionsInputObjectSchema), z.lazy(() => FormUncheckedUpdateWithoutSubmissionsInputObjectSchema)]).optional()
}).strict();
export const FormUpdateOneRequiredWithoutSubmissionsNestedInputObjectSchema: z.ZodType<Prisma.FormUpdateOneRequiredWithoutSubmissionsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FormUpdateOneRequiredWithoutSubmissionsNestedInput>;
export const FormUpdateOneRequiredWithoutSubmissionsNestedInputObjectZodSchema = makeSchema();
