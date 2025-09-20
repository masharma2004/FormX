import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionSelectObjectSchema as SubmissionSelectObjectSchema } from './objects/SubmissionSelect.schema';
import { SubmissionCreateManyInputObjectSchema as SubmissionCreateManyInputObjectSchema } from './objects/SubmissionCreateManyInput.schema';

export const SubmissionCreateManyAndReturnSchema: z.ZodType<Prisma.SubmissionCreateManyAndReturnArgs> = z.object({ select: SubmissionSelectObjectSchema.optional(), data: z.union([ SubmissionCreateManyInputObjectSchema, z.array(SubmissionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.SubmissionCreateManyAndReturnArgs>;

export const SubmissionCreateManyAndReturnZodSchema = z.object({ select: SubmissionSelectObjectSchema.optional(), data: z.union([ SubmissionCreateManyInputObjectSchema, z.array(SubmissionCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();