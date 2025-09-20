import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptScalarWhereInputObjectSchema as ScriptScalarWhereInputObjectSchema } from './ScriptScalarWhereInput.schema';
import { ScriptUpdateManyMutationInputObjectSchema as ScriptUpdateManyMutationInputObjectSchema } from './ScriptUpdateManyMutationInput.schema';
import { ScriptUncheckedUpdateManyWithoutUserInputObjectSchema as ScriptUncheckedUpdateManyWithoutUserInputObjectSchema } from './ScriptUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ScriptScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ScriptUpdateManyMutationInputObjectSchema), z.lazy(() => ScriptUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const ScriptUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.ScriptUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.ScriptUpdateManyWithWhereWithoutUserInput>;
export const ScriptUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
