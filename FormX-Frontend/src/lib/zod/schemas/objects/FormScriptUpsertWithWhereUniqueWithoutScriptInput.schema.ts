import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptWhereUniqueInputObjectSchema as FormScriptWhereUniqueInputObjectSchema } from './FormScriptWhereUniqueInput.schema';
import { FormScriptUpdateWithoutScriptInputObjectSchema as FormScriptUpdateWithoutScriptInputObjectSchema } from './FormScriptUpdateWithoutScriptInput.schema';
import { FormScriptUncheckedUpdateWithoutScriptInputObjectSchema as FormScriptUncheckedUpdateWithoutScriptInputObjectSchema } from './FormScriptUncheckedUpdateWithoutScriptInput.schema';
import { FormScriptCreateWithoutScriptInputObjectSchema as FormScriptCreateWithoutScriptInputObjectSchema } from './FormScriptCreateWithoutScriptInput.schema';
import { FormScriptUncheckedCreateWithoutScriptInputObjectSchema as FormScriptUncheckedCreateWithoutScriptInputObjectSchema } from './FormScriptUncheckedCreateWithoutScriptInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormScriptWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FormScriptUpdateWithoutScriptInputObjectSchema), z.lazy(() => FormScriptUncheckedUpdateWithoutScriptInputObjectSchema)]),
  create: z.union([z.lazy(() => FormScriptCreateWithoutScriptInputObjectSchema), z.lazy(() => FormScriptUncheckedCreateWithoutScriptInputObjectSchema)])
}).strict();
export const FormScriptUpsertWithWhereUniqueWithoutScriptInputObjectSchema: z.ZodType<Prisma.FormScriptUpsertWithWhereUniqueWithoutScriptInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptUpsertWithWhereUniqueWithoutScriptInput>;
export const FormScriptUpsertWithWhereUniqueWithoutScriptInputObjectZodSchema = makeSchema();
