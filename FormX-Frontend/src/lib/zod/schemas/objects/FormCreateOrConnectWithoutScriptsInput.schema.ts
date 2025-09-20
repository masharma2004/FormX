import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './FormWhereUniqueInput.schema';
import { FormCreateWithoutScriptsInputObjectSchema as FormCreateWithoutScriptsInputObjectSchema } from './FormCreateWithoutScriptsInput.schema';
import { FormUncheckedCreateWithoutScriptsInputObjectSchema as FormUncheckedCreateWithoutScriptsInputObjectSchema } from './FormUncheckedCreateWithoutScriptsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FormWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => FormCreateWithoutScriptsInputObjectSchema), z.lazy(() => FormUncheckedCreateWithoutScriptsInputObjectSchema)])
}).strict();
export const FormCreateOrConnectWithoutScriptsInputObjectSchema: z.ZodType<Prisma.FormCreateOrConnectWithoutScriptsInput> = makeSchema() as unknown as z.ZodType<Prisma.FormCreateOrConnectWithoutScriptsInput>;
export const FormCreateOrConnectWithoutScriptsInputObjectZodSchema = makeSchema();
