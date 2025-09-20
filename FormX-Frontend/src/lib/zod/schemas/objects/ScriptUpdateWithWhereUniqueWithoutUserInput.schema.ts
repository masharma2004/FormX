import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptWhereUniqueInputObjectSchema as ScriptWhereUniqueInputObjectSchema } from './ScriptWhereUniqueInput.schema';
import { ScriptUpdateWithoutUserInputObjectSchema as ScriptUpdateWithoutUserInputObjectSchema } from './ScriptUpdateWithoutUserInput.schema';
import { ScriptUncheckedUpdateWithoutUserInputObjectSchema as ScriptUncheckedUpdateWithoutUserInputObjectSchema } from './ScriptUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScriptWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ScriptUpdateWithoutUserInputObjectSchema), z.lazy(() => ScriptUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const ScriptUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.ScriptUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptUpdateWithWhereUniqueWithoutUserInput>;
export const ScriptUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
