import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { NocodbTableSelectObjectSchema as NocodbTableSelectObjectSchema } from './objects/NocodbTableSelect.schema';
import { NocodbTableIncludeObjectSchema as NocodbTableIncludeObjectSchema } from './objects/NocodbTableInclude.schema';
import { NocodbTableCreateInputObjectSchema as NocodbTableCreateInputObjectSchema } from './objects/NocodbTableCreateInput.schema';
import { NocodbTableUncheckedCreateInputObjectSchema as NocodbTableUncheckedCreateInputObjectSchema } from './objects/NocodbTableUncheckedCreateInput.schema';

export const NocodbTableCreateOneSchema: z.ZodType<Prisma.NocodbTableCreateArgs> = z.object({ select: NocodbTableSelectObjectSchema.optional(), include: NocodbTableIncludeObjectSchema.optional(), data: z.union([NocodbTableCreateInputObjectSchema, NocodbTableUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.NocodbTableCreateArgs>;

export const NocodbTableCreateOneZodSchema = z.object({ select: NocodbTableSelectObjectSchema.optional(), include: NocodbTableIncludeObjectSchema.optional(), data: z.union([NocodbTableCreateInputObjectSchema, NocodbTableUncheckedCreateInputObjectSchema]) }).strict();