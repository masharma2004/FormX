import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NocodbTableCreateWithoutFormInputObjectSchema as NocodbTableCreateWithoutFormInputObjectSchema } from './NocodbTableCreateWithoutFormInput.schema';
import { NocodbTableUncheckedCreateWithoutFormInputObjectSchema as NocodbTableUncheckedCreateWithoutFormInputObjectSchema } from './NocodbTableUncheckedCreateWithoutFormInput.schema';
import { NocodbTableCreateOrConnectWithoutFormInputObjectSchema as NocodbTableCreateOrConnectWithoutFormInputObjectSchema } from './NocodbTableCreateOrConnectWithoutFormInput.schema';
import { NocodbTableUpsertWithoutFormInputObjectSchema as NocodbTableUpsertWithoutFormInputObjectSchema } from './NocodbTableUpsertWithoutFormInput.schema';
import { NocodbTableWhereInputObjectSchema as NocodbTableWhereInputObjectSchema } from './NocodbTableWhereInput.schema';
import { NocodbTableWhereUniqueInputObjectSchema as NocodbTableWhereUniqueInputObjectSchema } from './NocodbTableWhereUniqueInput.schema';
import { NocodbTableUpdateToOneWithWhereWithoutFormInputObjectSchema as NocodbTableUpdateToOneWithWhereWithoutFormInputObjectSchema } from './NocodbTableUpdateToOneWithWhereWithoutFormInput.schema';
import { NocodbTableUpdateWithoutFormInputObjectSchema as NocodbTableUpdateWithoutFormInputObjectSchema } from './NocodbTableUpdateWithoutFormInput.schema';
import { NocodbTableUncheckedUpdateWithoutFormInputObjectSchema as NocodbTableUncheckedUpdateWithoutFormInputObjectSchema } from './NocodbTableUncheckedUpdateWithoutFormInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => NocodbTableCreateWithoutFormInputObjectSchema), z.lazy(() => NocodbTableUncheckedCreateWithoutFormInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => NocodbTableCreateOrConnectWithoutFormInputObjectSchema).optional(),
  upsert: z.lazy(() => NocodbTableUpsertWithoutFormInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => NocodbTableWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => NocodbTableWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => NocodbTableWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => NocodbTableUpdateToOneWithWhereWithoutFormInputObjectSchema), z.lazy(() => NocodbTableUpdateWithoutFormInputObjectSchema), z.lazy(() => NocodbTableUncheckedUpdateWithoutFormInputObjectSchema)]).optional()
}).strict();
export const NocodbTableUpdateOneWithoutFormNestedInputObjectSchema: z.ZodType<Prisma.NocodbTableUpdateOneWithoutFormNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableUpdateOneWithoutFormNestedInput>;
export const NocodbTableUpdateOneWithoutFormNestedInputObjectZodSchema = makeSchema();
