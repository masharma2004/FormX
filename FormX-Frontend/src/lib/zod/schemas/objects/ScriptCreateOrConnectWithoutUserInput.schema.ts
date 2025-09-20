import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInputObjectSchema as ScriptWhereUniqueInputObjectSchema } from './ScriptWhereUniqueInput.schema';
import { ScriptCreateWithoutUserInputObjectSchema as ScriptCreateWithoutUserInputObjectSchema } from './ScriptCreateWithoutUserInput.schema';
import { ScriptUncheckedCreateWithoutUserInputObjectSchema as ScriptUncheckedCreateWithoutUserInputObjectSchema } from './ScriptUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScriptWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ScriptCreateWithoutUserInputObjectSchema), z.lazy(() => ScriptUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const ScriptCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.ScriptCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptCreateOrConnectWithoutUserInput>;
export const ScriptCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
