import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NocodbTableWhereInputObjectSchema as NocodbTableWhereInputObjectSchema } from './objects/NocodbTableWhereInput.schema';

export const NocodbTableDeleteManySchema: z.ZodType<Prisma.NocodbTableDeleteManyArgs> = z.object({ where: NocodbTableWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NocodbTableDeleteManyArgs>;

export const NocodbTableDeleteManyZodSchema = z.object({ where: NocodbTableWhereInputObjectSchema.optional() }).strict();