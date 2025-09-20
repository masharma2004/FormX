import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptCreateWithoutUserInputObjectSchema as ScriptCreateWithoutUserInputObjectSchema } from './ScriptCreateWithoutUserInput.schema';
import { ScriptUncheckedCreateWithoutUserInputObjectSchema as ScriptUncheckedCreateWithoutUserInputObjectSchema } from './ScriptUncheckedCreateWithoutUserInput.schema';
import { ScriptCreateOrConnectWithoutUserInputObjectSchema as ScriptCreateOrConnectWithoutUserInputObjectSchema } from './ScriptCreateOrConnectWithoutUserInput.schema';
import { ScriptCreateManyUserInputEnvelopeObjectSchema as ScriptCreateManyUserInputEnvelopeObjectSchema } from './ScriptCreateManyUserInputEnvelope.schema';
import { ScriptWhereUniqueInputObjectSchema as ScriptWhereUniqueInputObjectSchema } from './ScriptWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ScriptCreateWithoutUserInputObjectSchema), z.lazy(() => ScriptCreateWithoutUserInputObjectSchema).array(), z.lazy(() => ScriptUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => ScriptUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ScriptCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => ScriptCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ScriptCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ScriptWhereUniqueInputObjectSchema), z.lazy(() => ScriptWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ScriptUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.ScriptUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptUncheckedCreateNestedManyWithoutUserInput>;
export const ScriptUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
