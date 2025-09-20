import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NocodbTableWhereUniqueInputObjectSchema as NocodbTableWhereUniqueInputObjectSchema } from './NocodbTableWhereUniqueInput.schema';
import { NocodbTableCreateWithoutFormInputObjectSchema as NocodbTableCreateWithoutFormInputObjectSchema } from './NocodbTableCreateWithoutFormInput.schema';
import { NocodbTableUncheckedCreateWithoutFormInputObjectSchema as NocodbTableUncheckedCreateWithoutFormInputObjectSchema } from './NocodbTableUncheckedCreateWithoutFormInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NocodbTableWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => NocodbTableCreateWithoutFormInputObjectSchema), z.lazy(() => NocodbTableUncheckedCreateWithoutFormInputObjectSchema)])
}).strict();
export const NocodbTableCreateOrConnectWithoutFormInputObjectSchema: z.ZodType<Prisma.NocodbTableCreateOrConnectWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableCreateOrConnectWithoutFormInput>;
export const NocodbTableCreateOrConnectWithoutFormInputObjectZodSchema = makeSchema();
