import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NocodbTableCreateWithoutFormInputObjectSchema as NocodbTableCreateWithoutFormInputObjectSchema } from './NocodbTableCreateWithoutFormInput.schema';
import { NocodbTableUncheckedCreateWithoutFormInputObjectSchema as NocodbTableUncheckedCreateWithoutFormInputObjectSchema } from './NocodbTableUncheckedCreateWithoutFormInput.schema';
import { NocodbTableCreateOrConnectWithoutFormInputObjectSchema as NocodbTableCreateOrConnectWithoutFormInputObjectSchema } from './NocodbTableCreateOrConnectWithoutFormInput.schema';
import { NocodbTableWhereUniqueInputObjectSchema as NocodbTableWhereUniqueInputObjectSchema } from './NocodbTableWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => NocodbTableCreateWithoutFormInputObjectSchema), z.lazy(() => NocodbTableUncheckedCreateWithoutFormInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => NocodbTableCreateOrConnectWithoutFormInputObjectSchema).optional(),
  connect: z.lazy(() => NocodbTableWhereUniqueInputObjectSchema).optional()
}).strict();
export const NocodbTableCreateNestedOneWithoutFormInputObjectSchema: z.ZodType<Prisma.NocodbTableCreateNestedOneWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableCreateNestedOneWithoutFormInput>;
export const NocodbTableCreateNestedOneWithoutFormInputObjectZodSchema = makeSchema();
