import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormCreateWithoutScriptsInputObjectSchema as FormCreateWithoutScriptsInputObjectSchema } from './FormCreateWithoutScriptsInput.schema';
import { FormUncheckedCreateWithoutScriptsInputObjectSchema as FormUncheckedCreateWithoutScriptsInputObjectSchema } from './FormUncheckedCreateWithoutScriptsInput.schema';
import { FormCreateOrConnectWithoutScriptsInputObjectSchema as FormCreateOrConnectWithoutScriptsInputObjectSchema } from './FormCreateOrConnectWithoutScriptsInput.schema';
import { FormUpsertWithoutScriptsInputObjectSchema as FormUpsertWithoutScriptsInputObjectSchema } from './FormUpsertWithoutScriptsInput.schema';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './FormWhereUniqueInput.schema';
import { FormUpdateToOneWithWhereWithoutScriptsInputObjectSchema as FormUpdateToOneWithWhereWithoutScriptsInputObjectSchema } from './FormUpdateToOneWithWhereWithoutScriptsInput.schema';
import { FormUpdateWithoutScriptsInputObjectSchema as FormUpdateWithoutScriptsInputObjectSchema } from './FormUpdateWithoutScriptsInput.schema';
import { FormUncheckedUpdateWithoutScriptsInputObjectSchema as FormUncheckedUpdateWithoutScriptsInputObjectSchema } from './FormUncheckedUpdateWithoutScriptsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FormCreateWithoutScriptsInputObjectSchema), z.lazy(() => FormUncheckedCreateWithoutScriptsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FormCreateOrConnectWithoutScriptsInputObjectSchema).optional(),
  upsert: z.lazy(() => FormUpsertWithoutScriptsInputObjectSchema).optional(),
  connect: z.lazy(() => FormWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => FormUpdateToOneWithWhereWithoutScriptsInputObjectSchema), z.lazy(() => FormUpdateWithoutScriptsInputObjectSchema), z.lazy(() => FormUncheckedUpdateWithoutScriptsInputObjectSchema)]).optional()
}).strict();
export const FormUpdateOneRequiredWithoutScriptsNestedInputObjectSchema: z.ZodType<Prisma.FormUpdateOneRequiredWithoutScriptsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.FormUpdateOneRequiredWithoutScriptsNestedInput>;
export const FormUpdateOneRequiredWithoutScriptsNestedInputObjectZodSchema = makeSchema();
