import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AiUsageSelectObjectSchema as AiUsageSelectObjectSchema } from './objects/AiUsageSelect.schema';
import { AiUsageIncludeObjectSchema as AiUsageIncludeObjectSchema } from './objects/AiUsageInclude.schema';
import { AiUsageCreateInputObjectSchema as AiUsageCreateInputObjectSchema } from './objects/AiUsageCreateInput.schema';
import { AiUsageUncheckedCreateInputObjectSchema as AiUsageUncheckedCreateInputObjectSchema } from './objects/AiUsageUncheckedCreateInput.schema';

export const AiUsageCreateOneSchema: z.ZodType<Prisma.AiUsageCreateArgs> = z.object({ select: AiUsageSelectObjectSchema.optional(), include: AiUsageIncludeObjectSchema.optional(), data: z.union([AiUsageCreateInputObjectSchema, AiUsageUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.AiUsageCreateArgs>;

export const AiUsageCreateOneZodSchema = z.object({ select: AiUsageSelectObjectSchema.optional(), include: AiUsageIncludeObjectSchema.optional(), data: z.union([AiUsageCreateInputObjectSchema, AiUsageUncheckedCreateInputObjectSchema]) }).strict();