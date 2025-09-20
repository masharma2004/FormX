import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ScriptCreateManyUserInputObjectSchema as ScriptCreateManyUserInputObjectSchema } from './ScriptCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ScriptCreateManyUserInputObjectSchema), z.lazy(() => ScriptCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ScriptCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.ScriptCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ScriptCreateManyUserInputEnvelope>;
export const ScriptCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
