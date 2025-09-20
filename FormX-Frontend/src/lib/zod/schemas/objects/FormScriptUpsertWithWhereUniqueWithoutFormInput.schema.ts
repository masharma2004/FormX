import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptWhereUniqueInputObjectSchema as FormScriptWhereUniqueInputObjectSchema } from './FormScriptWhereUniqueInput.schema';
import { FormScriptUpdateWithoutFormInputObjectSchema as FormScriptUpdateWithoutFormInputObjectSchema } from './FormScriptUpdateWithoutFormInput.schema';
import { FormScriptUncheckedUpdateWithoutFormInputObjectSchema as FormScriptUncheckedUpdateWithoutFormInputObjectSchema } from './FormScriptUncheckedUpdateWithoutFormInput.schema';
import { FormScriptCreateWithoutFormInputObjectSchema as FormScriptCreateWithoutFormInputObjectSchema } from './FormScriptCreateWithoutFormInput.schema';
import { FormScriptUncheckedCreateWithoutFormInputObjectSchema as FormScriptUncheckedCreateWithoutFormInputObjectSchema } from './FormScriptUncheckedCreateWithoutFormInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormScriptWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => FormScriptUpdateWithoutFormInputObjectSchema), z.lazy(() => FormScriptUncheckedUpdateWithoutFormInputObjectSchema)]),
  create: z.union([z.lazy(() => FormScriptCreateWithoutFormInputObjectSchema), z.lazy(() => FormScriptUncheckedCreateWithoutFormInputObjectSchema)])
}).strict();
export const FormScriptUpsertWithWhereUniqueWithoutFormInputObjectSchema: z.ZodType<Prisma.FormScriptUpsertWithWhereUniqueWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptUpsertWithWhereUniqueWithoutFormInput>;
export const FormScriptUpsertWithWhereUniqueWithoutFormInputObjectZodSchema = makeSchema();
