import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptCreateWithoutFormInputObjectSchema as FormScriptCreateWithoutFormInputObjectSchema } from './FormScriptCreateWithoutFormInput.schema';
import { FormScriptUncheckedCreateWithoutFormInputObjectSchema as FormScriptUncheckedCreateWithoutFormInputObjectSchema } from './FormScriptUncheckedCreateWithoutFormInput.schema';
import { FormScriptCreateOrConnectWithoutFormInputObjectSchema as FormScriptCreateOrConnectWithoutFormInputObjectSchema } from './FormScriptCreateOrConnectWithoutFormInput.schema';
import { FormScriptCreateManyFormInputEnvelopeObjectSchema as FormScriptCreateManyFormInputEnvelopeObjectSchema } from './FormScriptCreateManyFormInputEnvelope.schema';
import { FormScriptWhereUniqueInputObjectSchema as FormScriptWhereUniqueInputObjectSchema } from './FormScriptWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FormScriptCreateWithoutFormInputObjectSchema), z.lazy(() => FormScriptCreateWithoutFormInputObjectSchema).array(), z.lazy(() => FormScriptUncheckedCreateWithoutFormInputObjectSchema), z.lazy(() => FormScriptUncheckedCreateWithoutFormInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => FormScriptCreateOrConnectWithoutFormInputObjectSchema), z.lazy(() => FormScriptCreateOrConnectWithoutFormInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => FormScriptCreateManyFormInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => FormScriptWhereUniqueInputObjectSchema), z.lazy(() => FormScriptWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const FormScriptCreateNestedManyWithoutFormInputObjectSchema: z.ZodType<Prisma.FormScriptCreateNestedManyWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptCreateNestedManyWithoutFormInput>;
export const FormScriptCreateNestedManyWithoutFormInputObjectZodSchema = makeSchema();
