import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AiUsageUserIdDateCompoundUniqueInputObjectSchema as AiUsageUserIdDateCompoundUniqueInputObjectSchema } from './AiUsageUserIdDateCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId_date: z.lazy(() => AiUsageUserIdDateCompoundUniqueInputObjectSchema).optional()
}).strict();
export const AiUsageWhereUniqueInputObjectSchema: z.ZodType<Prisma.AiUsageWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageWhereUniqueInput>;
export const AiUsageWhereUniqueInputObjectZodSchema = makeSchema();
