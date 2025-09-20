import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptWhereUniqueInputObjectSchema as FormScriptWhereUniqueInputObjectSchema } from './FormScriptWhereUniqueInput.schema';
import { FormScriptCreateWithoutFormInputObjectSchema as FormScriptCreateWithoutFormInputObjectSchema } from './FormScriptCreateWithoutFormInput.schema';
import { FormScriptUncheckedCreateWithoutFormInputObjectSchema as FormScriptUncheckedCreateWithoutFormInputObjectSchema } from './FormScriptUncheckedCreateWithoutFormInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormScriptWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FormScriptCreateWithoutFormInputObjectSchema), z.lazy(() => FormScriptUncheckedCreateWithoutFormInputObjectSchema)])
}).strict();
export const FormScriptCreateOrConnectWithoutFormInputObjectSchema: z.ZodType<Prisma.FormScriptCreateOrConnectWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptCreateOrConnectWithoutFormInput>;
export const FormScriptCreateOrConnectWithoutFormInputObjectZodSchema = makeSchema();
