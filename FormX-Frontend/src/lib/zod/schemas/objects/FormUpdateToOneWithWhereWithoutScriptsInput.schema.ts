import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './FormWhereInput.schema';
import { FormUpdateWithoutScriptsInputObjectSchema as FormUpdateWithoutScriptsInputObjectSchema } from './FormUpdateWithoutScriptsInput.schema';
import { FormUncheckedUpdateWithoutScriptsInputObjectSchema as FormUncheckedUpdateWithoutScriptsInputObjectSchema } from './FormUncheckedUpdateWithoutScriptsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => FormUpdateWithoutScriptsInputObjectSchema), z.lazy(() => FormUncheckedUpdateWithoutScriptsInputObjectSchema)])
}).strict();
export const FormUpdateToOneWithWhereWithoutScriptsInputObjectSchema: z.ZodType<Prisma.FormUpdateToOneWithWhereWithoutScriptsInput> = makeSchema() as unknown as z.ZodType<Prisma.FormUpdateToOneWithWhereWithoutScriptsInput>;
export const FormUpdateToOneWithWhereWithoutScriptsInputObjectZodSchema = makeSchema();
