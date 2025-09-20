import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AiUsageWhereUniqueInputObjectSchema as AiUsageWhereUniqueInputObjectSchema } from './AiUsageWhereUniqueInput.schema';
import { AiUsageUpdateWithoutUserInputObjectSchema as AiUsageUpdateWithoutUserInputObjectSchema } from './AiUsageUpdateWithoutUserInput.schema';
import { AiUsageUncheckedUpdateWithoutUserInputObjectSchema as AiUsageUncheckedUpdateWithoutUserInputObjectSchema } from './AiUsageUncheckedUpdateWithoutUserInput.schema';
import { AiUsageCreateWithoutUserInputObjectSchema as AiUsageCreateWithoutUserInputObjectSchema } from './AiUsageCreateWithoutUserInput.schema';
import { AiUsageUncheckedCreateWithoutUserInputObjectSchema as AiUsageUncheckedCreateWithoutUserInputObjectSchema } from './AiUsageUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiUsageWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => AiUsageUpdateWithoutUserInputObjectSchema), z.lazy(() => AiUsageUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => AiUsageCreateWithoutUserInputObjectSchema), z.lazy(() => AiUsageUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const AiUsageUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.AiUsageUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageUpsertWithWhereUniqueWithoutUserInput>;
export const AiUsageUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
