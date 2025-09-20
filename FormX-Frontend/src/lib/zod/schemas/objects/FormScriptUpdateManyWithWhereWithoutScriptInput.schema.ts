import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptScalarWhereInputObjectSchema as FormScriptScalarWhereInputObjectSchema } from './FormScriptScalarWhereInput.schema';
import { FormScriptUpdateManyMutationInputObjectSchema as FormScriptUpdateManyMutationInputObjectSchema } from './FormScriptUpdateManyMutationInput.schema';
import { FormScriptUncheckedUpdateManyWithoutScriptInputObjectSchema as FormScriptUncheckedUpdateManyWithoutScriptInputObjectSchema } from './FormScriptUncheckedUpdateManyWithoutScriptInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormScriptScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FormScriptUpdateManyMutationInputObjectSchema), z.lazy(() => FormScriptUncheckedUpdateManyWithoutScriptInputObjectSchema)])
}).strict();
export const FormScriptUpdateManyWithWhereWithoutScriptInputObjectSchema: z.ZodType<Prisma.FormScriptUpdateManyWithWhereWithoutScriptInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptUpdateManyWithWhereWithoutScriptInput>;
export const FormScriptUpdateManyWithWhereWithoutScriptInputObjectZodSchema = makeSchema();
