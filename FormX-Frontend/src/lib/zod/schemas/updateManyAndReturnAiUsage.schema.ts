import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AiUsageSelectObjectSchema as AiUsageSelectObjectSchema } from './objects/AiUsageSelect.schema';
import { AiUsageUpdateManyMutationInputObjectSchema as AiUsageUpdateManyMutationInputObjectSchema } from './objects/AiUsageUpdateManyMutationInput.schema';
import { AiUsageWhereInputObjectSchema as AiUsageWhereInputObjectSchema } from './objects/AiUsageWhereInput.schema';

export const AiUsageUpdateManyAndReturnSchema: z.ZodType<Prisma.AiUsageUpdateManyAndReturnArgs> = z.object({ select: AiUsageSelectObjectSchema.optional(), data: AiUsageUpdateManyMutationInputObjectSchema, where: AiUsageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiUsageUpdateManyAndReturnArgs>;

export const AiUsageUpdateManyAndReturnZodSchema = z.object({ select: AiUsageSelectObjectSchema.optional(), data: AiUsageUpdateManyMutationInputObjectSchema, where: AiUsageWhereInputObjectSchema.optional() }).strict();