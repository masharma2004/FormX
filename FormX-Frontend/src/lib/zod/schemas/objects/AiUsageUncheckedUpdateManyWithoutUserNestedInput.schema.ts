import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { AiUsageCreateWithoutUserInputObjectSchema as AiUsageCreateWithoutUserInputObjectSchema } from './AiUsageCreateWithoutUserInput.schema';
import { AiUsageUncheckedCreateWithoutUserInputObjectSchema as AiUsageUncheckedCreateWithoutUserInputObjectSchema } from './AiUsageUncheckedCreateWithoutUserInput.schema';
import { AiUsageCreateOrConnectWithoutUserInputObjectSchema as AiUsageCreateOrConnectWithoutUserInputObjectSchema } from './AiUsageCreateOrConnectWithoutUserInput.schema';
import { AiUsageUpsertWithWhereUniqueWithoutUserInputObjectSchema as AiUsageUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './AiUsageUpsertWithWhereUniqueWithoutUserInput.schema';
import { AiUsageCreateManyUserInputEnvelopeObjectSchema as AiUsageCreateManyUserInputEnvelopeObjectSchema } from './AiUsageCreateManyUserInputEnvelope.schema';
import { AiUsageWhereUniqueInputObjectSchema as AiUsageWhereUniqueInputObjectSchema } from './AiUsageWhereUniqueInput.schema';
import { AiUsageUpdateWithWhereUniqueWithoutUserInputObjectSchema as AiUsageUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './AiUsageUpdateWithWhereUniqueWithoutUserInput.schema';
import { AiUsageUpdateManyWithWhereWithoutUserInputObjectSchema as AiUsageUpdateManyWithWhereWithoutUserInputObjectSchema } from './AiUsageUpdateManyWithWhereWithoutUserInput.schema';
import { AiUsageScalarWhereInputObjectSchema as AiUsageScalarWhereInputObjectSchema } from './AiUsageScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AiUsageCreateWithoutUserInputObjectSchema), z.lazy(() => AiUsageCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AiUsageUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AiUsageUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AiUsageCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AiUsageCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AiUsageUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AiUsageUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AiUsageCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AiUsageWhereUniqueInputObjectSchema), z.lazy(() => AiUsageWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AiUsageWhereUniqueInputObjectSchema), z.lazy(() => AiUsageWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AiUsageWhereUniqueInputObjectSchema), z.lazy(() => AiUsageWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AiUsageWhereUniqueInputObjectSchema), z.lazy(() => AiUsageWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AiUsageUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AiUsageUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AiUsageUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => AiUsageUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AiUsageScalarWhereInputObjectSchema), z.lazy(() => AiUsageScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AiUsageUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.AiUsageUncheckedUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AiUsageUncheckedUpdateManyWithoutUserNestedInput>;
export const AiUsageUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
