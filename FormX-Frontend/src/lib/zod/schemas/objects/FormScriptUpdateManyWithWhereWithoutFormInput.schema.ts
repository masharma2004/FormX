import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptScalarWhereInputObjectSchema as FormScriptScalarWhereInputObjectSchema } from './FormScriptScalarWhereInput.schema';
import { FormScriptUpdateManyMutationInputObjectSchema as FormScriptUpdateManyMutationInputObjectSchema } from './FormScriptUpdateManyMutationInput.schema';
import { FormScriptUncheckedUpdateManyWithoutFormInputObjectSchema as FormScriptUncheckedUpdateManyWithoutFormInputObjectSchema } from './FormScriptUncheckedUpdateManyWithoutFormInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormScriptScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => FormScriptUpdateManyMutationInputObjectSchema), z.lazy(() => FormScriptUncheckedUpdateManyWithoutFormInputObjectSchema)])
}).strict();
export const FormScriptUpdateManyWithWhereWithoutFormInputObjectSchema: z.ZodType<Prisma.FormScriptUpdateManyWithWhereWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptUpdateManyWithWhereWithoutFormInput>;
export const FormScriptUpdateManyWithWhereWithoutFormInputObjectZodSchema = makeSchema();
