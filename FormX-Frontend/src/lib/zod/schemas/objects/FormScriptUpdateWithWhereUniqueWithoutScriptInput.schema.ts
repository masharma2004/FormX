import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptWhereUniqueInputObjectSchema as FormScriptWhereUniqueInputObjectSchema } from './FormScriptWhereUniqueInput.schema';
import { FormScriptUpdateWithoutScriptInputObjectSchema as FormScriptUpdateWithoutScriptInputObjectSchema } from './FormScriptUpdateWithoutScriptInput.schema';
import { FormScriptUncheckedUpdateWithoutScriptInputObjectSchema as FormScriptUncheckedUpdateWithoutScriptInputObjectSchema } from './FormScriptUncheckedUpdateWithoutScriptInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormScriptWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => FormScriptUpdateWithoutScriptInputObjectSchema), z.lazy(() => FormScriptUncheckedUpdateWithoutScriptInputObjectSchema)])
}).strict();
export const FormScriptUpdateWithWhereUniqueWithoutScriptInputObjectSchema: z.ZodType<Prisma.FormScriptUpdateWithWhereUniqueWithoutScriptInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptUpdateWithWhereUniqueWithoutScriptInput>;
export const FormScriptUpdateWithWhereUniqueWithoutScriptInputObjectZodSchema = makeSchema();
