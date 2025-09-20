import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NocodbTableSelectObjectSchema as NocodbTableSelectObjectSchema } from './objects/NocodbTableSelect.schema';
import { NocodbTableIncludeObjectSchema as NocodbTableIncludeObjectSchema } from './objects/NocodbTableInclude.schema';
import { NocodbTableWhereUniqueInputObjectSchema as NocodbTableWhereUniqueInputObjectSchema } from './objects/NocodbTableWhereUniqueInput.schema';

export const NocodbTableFindUniqueOrThrowSchema: z.ZodType<Prisma.NocodbTableFindUniqueOrThrowArgs> = z.object({ select: NocodbTableSelectObjectSchema.optional(), include: NocodbTableIncludeObjectSchema.optional(), where: NocodbTableWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.NocodbTableFindUniqueOrThrowArgs>;

export const NocodbTableFindUniqueOrThrowZodSchema = z.object({ select: NocodbTableSelectObjectSchema.optional(), include: NocodbTableIncludeObjectSchema.optional(), where: NocodbTableWhereUniqueInputObjectSchema }).strict();