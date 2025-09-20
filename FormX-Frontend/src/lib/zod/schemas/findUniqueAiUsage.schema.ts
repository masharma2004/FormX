import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AiUsageSelectObjectSchema as AiUsageSelectObjectSchema } from './objects/AiUsageSelect.schema';
import { AiUsageIncludeObjectSchema as AiUsageIncludeObjectSchema } from './objects/AiUsageInclude.schema';
import { AiUsageWhereUniqueInputObjectSchema as AiUsageWhereUniqueInputObjectSchema } from './objects/AiUsageWhereUniqueInput.schema';

export const AiUsageFindUniqueSchema: z.ZodType<Prisma.AiUsageFindUniqueArgs> = z.object({ select: AiUsageSelectObjectSchema.optional(), include: AiUsageIncludeObjectSchema.optional(), where: AiUsageWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.AiUsageFindUniqueArgs>;

export const AiUsageFindUniqueZodSchema = z.object({ select: AiUsageSelectObjectSchema.optional(), include: AiUsageIncludeObjectSchema.optional(), where: AiUsageWhereUniqueInputObjectSchema }).strict();