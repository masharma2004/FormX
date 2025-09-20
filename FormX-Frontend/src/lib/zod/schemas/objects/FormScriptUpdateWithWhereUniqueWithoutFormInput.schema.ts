import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptWhereUniqueInputObjectSchema as FormScriptWhereUniqueInputObjectSchema } from './FormScriptWhereUniqueInput.schema';
import { FormScriptUpdateWithoutFormInputObjectSchema as FormScriptUpdateWithoutFormInputObjectSchema } from './FormScriptUpdateWithoutFormInput.schema';
import { FormScriptUncheckedUpdateWithoutFormInputObjectSchema as FormScriptUncheckedUpdateWithoutFormInputObjectSchema } from './FormScriptUncheckedUpdateWithoutFormInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormScriptWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FormScriptUpdateWithoutFormInputObjectSchema), z.lazy(() => FormScriptUncheckedUpdateWithoutFormInputObjectSchema)])
}).strict();
export const FormScriptUpdateWithWhereUniqueWithoutFormInputObjectSchema: z.ZodType<Prisma.FormScriptUpdateWithWhereUniqueWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptUpdateWithWhereUniqueWithoutFormInput>;
export const FormScriptUpdateWithWhereUniqueWithoutFormInputObjectZodSchema = makeSchema();
