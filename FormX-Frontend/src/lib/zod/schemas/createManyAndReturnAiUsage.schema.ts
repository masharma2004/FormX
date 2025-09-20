import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AiUsageSelectObjectSchema as AiUsageSelectObjectSchema } from './objects/AiUsageSelect.schema';
import { AiUsageCreateManyInputObjectSchema as AiUsageCreateManyInputObjectSchema } from './objects/AiUsageCreateManyInput.schema';

export const AiUsageCreateManyAndReturnSchema: z.ZodType<Prisma.AiUsageCreateManyAndReturnArgs> = z.object({ select: AiUsageSelectObjectSchema.optional(), data: z.union([ AiUsageCreateManyInputObjectSchema, z.array(AiUsageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.AiUsageCreateManyAndReturnArgs>;

export const AiUsageCreateManyAndReturnZodSchema = z.object({ select: AiUsageSelectObjectSchema.optional(), data: z.union([ AiUsageCreateManyInputObjectSchema, z.array(AiUsageCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();