import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AiUsageScalarWhereInputObjectSchema as AiUsageScalarWhereInputObjectSchema } from './AiUsageScalarWhereInput.schema';
import { AiUsageUpdateManyMutationInputObjectSchema as AiUsageUpdateManyMutationInputObjectSchema } from './AiUsageUpdateManyMutationInput.schema';
import { AiUsageUncheckedUpdateManyWithoutUserInputObjectSchema as AiUsageUncheckedUpdateManyWithoutUserInputObjectSchema } from './AiUsageUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => AiUsageScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => AiUsageUpdateManyMutationInputObjectSchema), z.lazy(() => AiUsageUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const AiUsageUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.AiUsageUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageUpdateManyWithWhereWithoutUserInput>;
export const AiUsageUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
