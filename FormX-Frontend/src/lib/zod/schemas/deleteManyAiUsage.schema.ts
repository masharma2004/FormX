import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { AiUsageWhereInputObjectSchema as AiUsageWhereInputObjectSchema } from './objects/AiUsageWhereInput.schema';

export const AiUsageDeleteManySchema: z.ZodType<Prisma.AiUsageDeleteManyArgs> = z.object({ where: AiUsageWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.AiUsageDeleteManyArgs>;

export const AiUsageDeleteManyZodSchema = z.object({ where: AiUsageWhereInputObjectSchema.optional() }).strict();