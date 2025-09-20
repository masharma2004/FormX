import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AiUsageSelectObjectSchema as AiUsageSelectObjectSchema } from './objects/AiUsageSelect.schema';
import { AiUsageIncludeObjectSchema as AiUsageIncludeObjectSchema } from './objects/AiUsageInclude.schema';
import { AiUsageUpdateInputObjectSchema as AiUsageUpdateInputObjectSchema } from './objects/AiUsageUpdateInput.schema';
import { AiUsageUncheckedUpdateInputObjectSchema as AiUsageUncheckedUpdateInputObjectSchema } from './objects/AiUsageUncheckedUpdateInput.schema';
import { AiUsageWhereUniqueInputObjectSchema as AiUsageWhereUniqueInputObjectSchema } from './objects/AiUsageWhereUniqueInput.schema';

export const AiUsageUpdateOneSchema: z.ZodType<Prisma.AiUsageUpdateArgs> = z.object({ select: AiUsageSelectObjectSchema.optional(), include: AiUsageIncludeObjectSchema.optional(), data: z.union([AiUsageUpdateInputObjectSchema, AiUsageUncheckedUpdateInputObjectSchema]), where: AiUsageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiUsageUpdateArgs>;

export const AiUsageUpdateOneZodSchema = z.object({ select: AiUsageSelectObjectSchema.optional(), include: AiUsageIncludeObjectSchema.optional(), data: z.union([AiUsageUpdateInputObjectSchema, AiUsageUncheckedUpdateInputObjectSchema]), where: AiUsageWhereUniqueInputObjectSchema }).strict();