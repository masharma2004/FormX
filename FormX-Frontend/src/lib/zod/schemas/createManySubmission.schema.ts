import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionCreateManyInputObjectSchema as SubmissionCreateManyInputObjectSchema } from './objects/SubmissionCreateManyInput.schema';

export const SubmissionCreateManySchema: z.ZodType<Prisma.SubmissionCreateManyArgs> = z.object({ data: z.union([ SubmissionCreateManyInputObjectSchema, z.array(SubmissionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SubmissionCreateManyArgs>;

export const SubmissionCreateManyZodSchema = z.object({ data: z.union([ SubmissionCreateManyInputObjectSchema, z.array(SubmissionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();