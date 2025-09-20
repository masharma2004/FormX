import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NocodbTableCreateManyInputObjectSchema as NocodbTableCreateManyInputObjectSchema } from './objects/NocodbTableCreateManyInput.schema';

export const NocodbTableCreateManySchema: z.ZodType<Prisma.NocodbTableCreateManyArgs> = z.object({ data: z.union([ NocodbTableCreateManyInputObjectSchema, z.array(NocodbTableCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.NocodbTableCreateManyArgs>;

export const NocodbTableCreateManyZodSchema = z.object({ data: z.union([ NocodbTableCreateManyInputObjectSchema, z.array(NocodbTableCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();