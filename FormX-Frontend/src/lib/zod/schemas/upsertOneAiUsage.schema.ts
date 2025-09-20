import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AiUsageSelectObjectSchema as AiUsageSelectObjectSchema } from './objects/AiUsageSelect.schema';
import { AiUsageIncludeObjectSchema as AiUsageIncludeObjectSchema } from './objects/AiUsageInclude.schema';
import { AiUsageWhereUniqueInputObjectSchema as AiUsageWhereUniqueInputObjectSchema } from './objects/AiUsageWhereUniqueInput.schema';
import { AiUsageCreateInputObjectSchema as AiUsageCreateInputObjectSchema } from './objects/AiUsageCreateInput.schema';
import { AiUsageUncheckedCreateInputObjectSchema as AiUsageUncheckedCreateInputObjectSchema } from './objects/AiUsageUncheckedCreateInput.schema';
import { AiUsageUpdateInputObjectSchema as AiUsageUpdateInputObjectSchema } from './objects/AiUsageUpdateInput.schema';
import { AiUsageUncheckedUpdateInputObjectSchema as AiUsageUncheckedUpdateInputObjectSchema } from './objects/AiUsageUncheckedUpdateInput.schema';

export const AiUsageUpsertOneSchema: z.ZodType<Prisma.AiUsageUpsertArgs> = z.object({ select: AiUsageSelectObjectSchema.optional(), include: AiUsageIncludeObjectSchema.optional(), where: AiUsageWhereUniqueInputObjectSchema, create: z.union([ AiUsageCreateInputObjectSchema, AiUsageUncheckedCreateInputObjectSchema ]), update: z.union([ AiUsageUpdateInputObjectSchema, AiUsageUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.AiUsageUpsertArgs>;

export const AiUsageUpsertOneZodSchema = z.object({ select: AiUsageSelectObjectSchema.optional(), include: AiUsageIncludeObjectSchema.optional(), where: AiUsageWhereUniqueInputObjectSchema, create: z.union([ AiUsageCreateInputObjectSchema, AiUsageUncheckedCreateInputObjectSchema ]), update: z.union([ AiUsageUpdateInputObjectSchema, AiUsageUncheckedUpdateInputObjectSchema ]) }).strict();