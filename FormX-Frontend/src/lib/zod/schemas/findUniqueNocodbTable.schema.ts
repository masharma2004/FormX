import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NocodbTableSelectObjectSchema as NocodbTableSelectObjectSchema } from './objects/NocodbTableSelect.schema';
import { NocodbTableIncludeObjectSchema as NocodbTableIncludeObjectSchema } from './objects/NocodbTableInclude.schema';
import { NocodbTableWhereUniqueInputObjectSchema as NocodbTableWhereUniqueInputObjectSchema } from './objects/NocodbTableWhereUniqueInput.schema';

export const NocodbTableFindUniqueSchema: z.ZodType<Prisma.NocodbTableFindUniqueArgs> = z.object({ select: NocodbTableSelectObjectSchema.optional(), include: NocodbTableIncludeObjectSchema.optional(), where: NocodbTableWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NocodbTableFindUniqueArgs>;

export const NocodbTableFindUniqueZodSchema = z.object({ select: NocodbTableSelectObjectSchema.optional(), include: NocodbTableIncludeObjectSchema.optional(), where: NocodbTableWhereUniqueInputObjectSchema }).strict();