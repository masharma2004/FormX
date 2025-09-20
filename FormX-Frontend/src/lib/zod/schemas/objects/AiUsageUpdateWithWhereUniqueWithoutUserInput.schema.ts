import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AiUsageWhereUniqueInputObjectSchema as AiUsageWhereUniqueInputObjectSchema } from './AiUsageWhereUniqueInput.schema';
import { AiUsageUpdateWithoutUserInputObjectSchema as AiUsageUpdateWithoutUserInputObjectSchema } from './AiUsageUpdateWithoutUserInput.schema';
import { AiUsageUncheckedUpdateWithoutUserInputObjectSchema as AiUsageUncheckedUpdateWithoutUserInputObjectSchema } from './AiUsageUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiUsageWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => AiUsageUpdateWithoutUserInputObjectSchema), z.lazy(() => AiUsageUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const AiUsageUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AiUsageUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageUpdateWithWhereUniqueWithoutUserInput>;
export const AiUsageUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
