import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NocodbTableSelectObjectSchema as NocodbTableSelectObjectSchema } from './objects/NocodbTableSelect.schema';
import { NocodbTableIncludeObjectSchema as NocodbTableIncludeObjectSchema } from './objects/NocodbTableInclude.schema';
import { NocodbTableWhereUniqueInputObjectSchema as NocodbTableWhereUniqueInputObjectSchema } from './objects/NocodbTableWhereUniqueInput.schema';
import { NocodbTableCreateInputObjectSchema as NocodbTableCreateInputObjectSchema } from './objects/NocodbTableCreateInput.schema';
import { NocodbTableUncheckedCreateInputObjectSchema as NocodbTableUncheckedCreateInputObjectSchema } from './objects/NocodbTableUncheckedCreateInput.schema';
import { NocodbTableUpdateInputObjectSchema as NocodbTableUpdateInputObjectSchema } from './objects/NocodbTableUpdateInput.schema';
import { NocodbTableUncheckedUpdateInputObjectSchema as NocodbTableUncheckedUpdateInputObjectSchema } from './objects/NocodbTableUncheckedUpdateInput.schema';

export const NocodbTableUpsertOneSchema: z.ZodType<Prisma.NocodbTableUpsertArgs> = z.object({ select: NocodbTableSelectObjectSchema.optional(), include: NocodbTableIncludeObjectSchema.optional(), where: NocodbTableWhereUniqueInputObjectSchema, create: z.union([ NocodbTableCreateInputObjectSchema, NocodbTableUncheckedCreateInputObjectSchema ]), update: z.union([ NocodbTableUpdateInputObjectSchema, NocodbTableUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.NocodbTableUpsertArgs>;

export const NocodbTableUpsertOneZodSchema = z.object({ select: NocodbTableSelectObjectSchema.optional(), include: NocodbTableIncludeObjectSchema.optional(), where: NocodbTableWhereUniqueInputObjectSchema, create: z.union([ NocodbTableCreateInputObjectSchema, NocodbTableUncheckedCreateInputObjectSchema ]), update: z.union([ NocodbTableUpdateInputObjectSchema, NocodbTableUncheckedUpdateInputObjectSchema ]) }).strict();