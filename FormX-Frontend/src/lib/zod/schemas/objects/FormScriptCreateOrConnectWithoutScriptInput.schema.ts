import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptWhereUniqueInputObjectSchema as FormScriptWhereUniqueInputObjectSchema } from './FormScriptWhereUniqueInput.schema';
import { FormScriptCreateWithoutScriptInputObjectSchema as FormScriptCreateWithoutScriptInputObjectSchema } from './FormScriptCreateWithoutScriptInput.schema';
import { FormScriptUncheckedCreateWithoutScriptInputObjectSchema as FormScriptUncheckedCreateWithoutScriptInputObjectSchema } from './FormScriptUncheckedCreateWithoutScriptInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormScriptWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FormScriptCreateWithoutScriptInputObjectSchema), z.lazy(() => FormScriptUncheckedCreateWithoutScriptInputObjectSchema)])
}).strict();
export const FormScriptCreateOrConnectWithoutScriptInputObjectSchema: z.ZodType<Prisma.FormScriptCreateOrConnectWithoutScriptInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptCreateOrConnectWithoutScriptInput>;
export const FormScriptCreateOrConnectWithoutScriptInputObjectZodSchema = makeSchema();
