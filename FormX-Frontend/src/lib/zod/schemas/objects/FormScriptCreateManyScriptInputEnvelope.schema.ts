import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptCreateManyScriptInputObjectSchema as FormScriptCreateManyScriptInputObjectSchema } from './FormScriptCreateManyScriptInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FormScriptCreateManyScriptInputObjectSchema), z.lazy(() => FormScriptCreateManyScriptInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FormScriptCreateManyScriptInputEnvelopeObjectSchema: z.ZodType<Prisma.FormScriptCreateManyScriptInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptCreateManyScriptInputEnvelope>;
export const FormScriptCreateManyScriptInputEnvelopeObjectZodSchema = makeSchema();
