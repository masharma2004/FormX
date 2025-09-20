import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormUpdateWithoutScriptsInputObjectSchema as FormUpdateWithoutScriptsInputObjectSchema } from './FormUpdateWithoutScriptsInput.schema';
import { FormUncheckedUpdateWithoutScriptsInputObjectSchema as FormUncheckedUpdateWithoutScriptsInputObjectSchema } from './FormUncheckedUpdateWithoutScriptsInput.schema';
import { FormCreateWithoutScriptsInputObjectSchema as FormCreateWithoutScriptsInputObjectSchema } from './FormCreateWithoutScriptsInput.schema';
import { FormUncheckedCreateWithoutScriptsInputObjectSchema as FormUncheckedCreateWithoutScriptsInputObjectSchema } from './FormUncheckedCreateWithoutScriptsInput.schema';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './FormWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => FormUpdateWithoutScriptsInputObjectSchema), z.lazy(() => FormUncheckedUpdateWithoutScriptsInputObjectSchema)]),
  create: z.union([z.lazy(() => FormCreateWithoutScriptsInputObjectSchema), z.lazy(() => FormUncheckedCreateWithoutScriptsInputObjectSchema)]),
  where: z.lazy(() => FormWhereInputObjectSchema).optional()
}).strict();
export const FormUpsertWithoutScriptsInputObjectSchema: z.ZodType<Prisma.FormUpsertWithoutScriptsInput> = makeSchema() as unknown as z.ZodType<Prisma.FormUpsertWithoutScriptsInput>;
export const FormUpsertWithoutScriptsInputObjectZodSchema = makeSchema();
