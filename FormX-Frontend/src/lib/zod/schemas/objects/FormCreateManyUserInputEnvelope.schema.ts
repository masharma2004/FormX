import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormCreateManyUserInputObjectSchema as FormCreateManyUserInputObjectSchema } from './FormCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => FormCreateManyUserInputObjectSchema), z.lazy(() => FormCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const FormCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.FormCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.FormCreateManyUserInputEnvelope>;
export const FormCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
