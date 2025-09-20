import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NocodbTableUpdateWithoutFormInputObjectSchema as NocodbTableUpdateWithoutFormInputObjectSchema } from './NocodbTableUpdateWithoutFormInput.schema';
import { NocodbTableUncheckedUpdateWithoutFormInputObjectSchema as NocodbTableUncheckedUpdateWithoutFormInputObjectSchema } from './NocodbTableUncheckedUpdateWithoutFormInput.schema';
import { NocodbTableCreateWithoutFormInputObjectSchema as NocodbTableCreateWithoutFormInputObjectSchema } from './NocodbTableCreateWithoutFormInput.schema';
import { NocodbTableUncheckedCreateWithoutFormInputObjectSchema as NocodbTableUncheckedCreateWithoutFormInputObjectSchema } from './NocodbTableUncheckedCreateWithoutFormInput.schema';
import { NocodbTableWhereInputObjectSchema as NocodbTableWhereInputObjectSchema } from './NocodbTableWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => NocodbTableUpdateWithoutFormInputObjectSchema), z.lazy(() => NocodbTableUncheckedUpdateWithoutFormInputObjectSchema)]),
  create: z.union([z.lazy(() => NocodbTableCreateWithoutFormInputObjectSchema), z.lazy(() => NocodbTableUncheckedCreateWithoutFormInputObjectSchema)]),
  where: z.lazy(() => NocodbTableWhereInputObjectSchema).optional()
}).strict();
export const NocodbTableUpsertWithoutFormInputObjectSchema: z.ZodType<Prisma.NocodbTableUpsertWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableUpsertWithoutFormInput>;
export const NocodbTableUpsertWithoutFormInputObjectZodSchema = makeSchema();
