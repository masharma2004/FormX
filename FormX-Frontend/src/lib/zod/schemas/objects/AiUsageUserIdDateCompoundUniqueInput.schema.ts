import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  userId: z.string(),
  date: z.date()
}).strict();
export const AiUsageUserIdDateCompoundUniqueInputObjectSchema: z.ZodType<Prisma.AiUsageUserIdDateCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageUserIdDateCompoundUniqueInput>;
export const AiUsageUserIdDateCompoundUniqueInputObjectZodSchema = makeSchema();
