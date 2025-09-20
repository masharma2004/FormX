import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AiUsageCreateManyUserInputObjectSchema as AiUsageCreateManyUserInputObjectSchema } from './AiUsageCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => AiUsageCreateManyUserInputObjectSchema), z.lazy(() => AiUsageCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const AiUsageCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.AiUsageCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageCreateManyUserInputEnvelope>;
export const AiUsageCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
