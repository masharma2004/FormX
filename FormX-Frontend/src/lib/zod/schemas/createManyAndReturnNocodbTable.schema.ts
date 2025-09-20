import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NocodbTableSelectObjectSchema as NocodbTableSelectObjectSchema } from './objects/NocodbTableSelect.schema';
import { NocodbTableCreateManyInputObjectSchema as NocodbTableCreateManyInputObjectSchema } from './objects/NocodbTableCreateManyInput.schema';

export const NocodbTableCreateManyAndReturnSchema: z.ZodType<Prisma.NocodbTableCreateManyAndReturnArgs> = z.object({ select: NocodbTableSelectObjectSchema.optional(), data: z.union([ NocodbTableCreateManyInputObjectSchema, z.array(NocodbTableCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.NocodbTableCreateManyAndReturnArgs>;

export const NocodbTableCreateManyAndReturnZodSchema = z.object({ select: NocodbTableSelectObjectSchema.optional(), data: z.union([ NocodbTableCreateManyInputObjectSchema, z.array(NocodbTableCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();