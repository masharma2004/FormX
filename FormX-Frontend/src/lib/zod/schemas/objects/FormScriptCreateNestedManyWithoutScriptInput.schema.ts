import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptCreateWithoutScriptInputObjectSchema as FormScriptCreateWithoutScriptInputObjectSchema } from './FormScriptCreateWithoutScriptInput.schema';
import { FormScriptUncheckedCreateWithoutScriptInputObjectSchema as FormScriptUncheckedCreateWithoutScriptInputObjectSchema } from './FormScriptUncheckedCreateWithoutScriptInput.schema';
import { FormScriptCreateOrConnectWithoutScriptInputObjectSchema as FormScriptCreateOrConnectWithoutScriptInputObjectSchema } from './FormScriptCreateOrConnectWithoutScriptInput.schema';
import { FormScriptCreateManyScriptInputEnvelopeObjectSchema as FormScriptCreateManyScriptInputEnvelopeObjectSchema } from './FormScriptCreateManyScriptInputEnvelope.schema';
import { FormScriptWhereUniqueInputObjectSchema as FormScriptWhereUniqueInputObjectSchema } from './FormScriptWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FormScriptCreateWithoutScriptInputObjectSchema), z.lazy(() => FormScriptCreateWithoutScriptInputObjectSchema).array(), z.lazy(() => FormScriptUncheckedCreateWithoutScriptInputObjectSchema), z.lazy(() => FormScriptUncheckedCreateWithoutScriptInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FormScriptCreateOrConnectWithoutScriptInputObjectSchema), z.lazy(() => FormScriptCreateOrConnectWithoutScriptInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FormScriptCreateManyScriptInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FormScriptWhereUniqueInputObjectSchema), z.lazy(() => FormScriptWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FormScriptCreateNestedManyWithoutScriptInputObjectSchema: z.ZodType<Prisma.FormScriptCreateNestedManyWithoutScriptInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptCreateNestedManyWithoutScriptInput>;
export const FormScriptCreateNestedManyWithoutScriptInputObjectZodSchema = makeSchema();
