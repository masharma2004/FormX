import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NocodbTableWhereInputObjectSchema as NocodbTableWhereInputObjectSchema } from './NocodbTableWhereInput.schema';
import { NocodbTableUpdateWithoutFormInputObjectSchema as NocodbTableUpdateWithoutFormInputObjectSchema } from './NocodbTableUpdateWithoutFormInput.schema';
import { NocodbTableUncheckedUpdateWithoutFormInputObjectSchema as NocodbTableUncheckedUpdateWithoutFormInputObjectSchema } from './NocodbTableUncheckedUpdateWithoutFormInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => NocodbTableWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => NocodbTableUpdateWithoutFormInputObjectSchema), z.lazy(() => NocodbTableUncheckedUpdateWithoutFormInputObjectSchema)])
}).strict();
export const NocodbTableUpdateToOneWithWhereWithoutFormInputObjectSchema: z.ZodType<Prisma.NocodbTableUpdateToOneWithWhereWithoutFormInput> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableUpdateToOneWithWhereWithoutFormInput>;
export const NocodbTableUpdateToOneWithWhereWithoutFormInputObjectZodSchema = makeSchema();
