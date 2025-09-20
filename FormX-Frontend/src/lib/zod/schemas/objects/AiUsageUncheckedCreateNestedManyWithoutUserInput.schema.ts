import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AiUsageCreateWithoutUserInputObjectSchema as AiUsageCreateWithoutUserInputObjectSchema } from './AiUsageCreateWithoutUserInput.schema';
import { AiUsageUncheckedCreateWithoutUserInputObjectSchema as AiUsageUncheckedCreateWithoutUserInputObjectSchema } from './AiUsageUncheckedCreateWithoutUserInput.schema';
import { AiUsageCreateOrConnectWithoutUserInputObjectSchema as AiUsageCreateOrConnectWithoutUserInputObjectSchema } from './AiUsageCreateOrConnectWithoutUserInput.schema';
import { AiUsageCreateManyUserInputEnvelopeObjectSchema as AiUsageCreateManyUserInputEnvelopeObjectSchema } from './AiUsageCreateManyUserInputEnvelope.schema';
import { AiUsageWhereUniqueInputObjectSchema as AiUsageWhereUniqueInputObjectSchema } from './AiUsageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiUsageCreateWithoutUserInputObjectSchema), z.lazy(() => AiUsageCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AiUsageUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AiUsageUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AiUsageCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AiUsageCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AiUsageCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => AiUsageWhereUniqueInputObjectSchema), z.lazy(() => AiUsageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const AiUsageUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.AiUsageUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageUncheckedCreateNestedManyWithoutUserInput>;
export const AiUsageUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
