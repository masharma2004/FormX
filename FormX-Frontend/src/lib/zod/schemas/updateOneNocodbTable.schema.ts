import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NocodbTableSelectObjectSchema as NocodbTableSelectObjectSchema } from './objects/NocodbTableSelect.schema';
import { NocodbTableIncludeObjectSchema as NocodbTableIncludeObjectSchema } from './objects/NocodbTableInclude.schema';
import { NocodbTableUpdateInputObjectSchema as NocodbTableUpdateInputObjectSchema } from './objects/NocodbTableUpdateInput.schema';
import { NocodbTableUncheckedUpdateInputObjectSchema as NocodbTableUncheckedUpdateInputObjectSchema } from './objects/NocodbTableUncheckedUpdateInput.schema';
import { NocodbTableWhereUniqueInputObjectSchema as NocodbTableWhereUniqueInputObjectSchema } from './objects/NocodbTableWhereUniqueInput.schema';

export const NocodbTableUpdateOneSchema: z.ZodType<Prisma.NocodbTableUpdateArgs> = z.object({ select: NocodbTableSelectObjectSchema.optional(), include: NocodbTableIncludeObjectSchema.optional(), data: z.union([NocodbTableUpdateInputObjectSchema, NocodbTableUncheckedUpdateInputObjectSchema]), where: NocodbTableWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NocodbTableUpdateArgs>;

export const NocodbTableUpdateOneZodSchema = z.object({ select: NocodbTableSelectObjectSchema.optional(), include: NocodbTableIncludeObjectSchema.optional(), data: z.union([NocodbTableUpdateInputObjectSchema, NocodbTableUncheckedUpdateInputObjectSchema]), where: NocodbTableWhereUniqueInputObjectSchema }).strict();