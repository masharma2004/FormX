import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptCreateManyFormInputObjectSchema as FormScriptCreateManyFormInputObjectSchema } from './FormScriptCreateManyFormInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FormScriptCreateManyFormInputObjectSchema), z.lazy(() => FormScriptCreateManyFormInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FormScriptCreateManyFormInputEnvelopeObjectSchema: z.ZodType<Prisma.FormScriptCreateManyFormInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptCreateManyFormInputEnvelope>;
export const FormScriptCreateManyFormInputEnvelopeObjectZodSchema = makeSchema();
