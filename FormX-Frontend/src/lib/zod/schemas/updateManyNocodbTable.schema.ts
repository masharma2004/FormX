import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NocodbTableUpdateManyMutationInputObjectSchema as NocodbTableUpdateManyMutationInputObjectSchema } from './objects/NocodbTableUpdateManyMutationInput.schema';
import { NocodbTableWhereInputObjectSchema as NocodbTableWhereInputObjectSchema } from './objects/NocodbTableWhereInput.schema';

export const NocodbTableUpdateManySchema: z.ZodType<Prisma.NocodbTableUpdateManyArgs> = z.object({ data: NocodbTableUpdateManyMutationInputObjectSchema, where: NocodbTableWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NocodbTableUpdateManyArgs>;

export const NocodbTableUpdateManyZodSchema = z.object({ data: NocodbTableUpdateManyMutationInputObjectSchema, where: NocodbTableWhereInputObjectSchema.optional() }).strict();