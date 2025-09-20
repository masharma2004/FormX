import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AiUsageUpdateManyMutationInputObjectSchema as AiUsageUpdateManyMutationInputObjectSchema } from './objects/AiUsageUpdateManyMutationInput.schema';
import { AiUsageWhereInputObjectSchema as AiUsageWhereInputObjectSchema } from './objects/AiUsageWhereInput.schema';

export const AiUsageUpdateManySchema: z.ZodType<Prisma.AiUsageUpdateManyArgs> = z.object({ data: AiUsageUpdateManyMutationInputObjectSchema, where: AiUsageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiUsageUpdateManyArgs>;

export const AiUsageUpdateManyZodSchema = z.object({ data: AiUsageUpdateManyMutationInputObjectSchema, where: AiUsageWhereInputObjectSchema.optional() }).strict();