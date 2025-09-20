import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AiUsageWhereUniqueInputObjectSchema as AiUsageWhereUniqueInputObjectSchema } from './AiUsageWhereUniqueInput.schema';
import { AiUsageCreateWithoutUserInputObjectSchema as AiUsageCreateWithoutUserInputObjectSchema } from './AiUsageCreateWithoutUserInput.schema';
import { AiUsageUncheckedCreateWithoutUserInputObjectSchema as AiUsageUncheckedCreateWithoutUserInputObjectSchema } from './AiUsageUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiUsageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => AiUsageCreateWithoutUserInputObjectSchema), z.lazy(() => AiUsageUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AiUsageCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.AiUsageCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageCreateOrConnectWithoutUserInput>;
export const AiUsageCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
