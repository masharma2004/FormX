import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AiUsageCreateManyInputObjectSchema as AiUsageCreateManyInputObjectSchema } from './objects/AiUsageCreateManyInput.schema';

export const AiUsageCreateManySchema: z.ZodType<Prisma.AiUsageCreateManyArgs> = z.object({ data: z.union([ AiUsageCreateManyInputObjectSchema, z.array(AiUsageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AiUsageCreateManyArgs>;

export const AiUsageCreateManyZodSchema = z.object({ data: z.union([ AiUsageCreateManyInputObjectSchema, z.array(AiUsageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();