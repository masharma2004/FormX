import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormCreateWithoutScriptsInputObjectSchema as FormCreateWithoutScriptsInputObjectSchema } from './FormCreateWithoutScriptsInput.schema';
import { FormUncheckedCreateWithoutScriptsInputObjectSchema as FormUncheckedCreateWithoutScriptsInputObjectSchema } from './FormUncheckedCreateWithoutScriptsInput.schema';
import { FormCreateOrConnectWithoutScriptsInputObjectSchema as FormCreateOrConnectWithoutScriptsInputObjectSchema } from './FormCreateOrConnectWithoutScriptsInput.schema';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './FormWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => FormCreateWithoutScriptsInputObjectSchema), z.lazy(() => FormUncheckedCreateWithoutScriptsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => FormCreateOrConnectWithoutScriptsInputObjectSchema).optional(),
  connect: z.lazy(() => FormWhereUniqueInputObjectSchema).optional()
}).strict();
export const FormCreateNestedOneWithoutScriptsInputObjectSchema: z.ZodType<Prisma.FormCreateNestedOneWithoutScriptsInput> = makeSchema() as unknown as z.ZodType<Prisma.FormCreateNestedOneWithoutScriptsInput>;
export const FormCreateNestedOneWithoutScriptsInputObjectZodSchema = makeSchema();
