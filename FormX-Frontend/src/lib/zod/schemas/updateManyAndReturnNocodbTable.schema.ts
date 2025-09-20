import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NocodbTableSelectObjectSchema as NocodbTableSelectObjectSchema } from './objects/NocodbTableSelect.schema';
import { NocodbTableUpdateManyMutationInputObjectSchema as NocodbTableUpdateManyMutationInputObjectSchema } from './objects/NocodbTableUpdateManyMutationInput.schema';
import { NocodbTableWhereInputObjectSchema as NocodbTableWhereInputObjectSchema } from './objects/NocodbTableWhereInput.schema';

export const NocodbTableUpdateManyAndReturnSchema: z.ZodType<Prisma.NocodbTableUpdateManyAndReturnArgs> = z.object({ select: NocodbTableSelectObjectSchema.optional(), data: NocodbTableUpdateManyMutationInputObjectSchema, where: NocodbTableWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.NocodbTableUpdateManyAndReturnArgs>;

export const NocodbTableUpdateManyAndReturnZodSchema = z.object({ select: NocodbTableSelectObjectSchema.optional(), data: NocodbTableUpdateManyMutationInputObjectSchema, where: NocodbTableWhereInputObjectSchema.optional() }).strict();