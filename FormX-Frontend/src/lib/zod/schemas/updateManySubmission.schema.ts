import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionUpdateManyMutationInputObjectSchema as SubmissionUpdateManyMutationInputObjectSchema } from './objects/SubmissionUpdateManyMutationInput.schema';
import { SubmissionWhereInputObjectSchema as SubmissionWhereInputObjectSchema } from './objects/SubmissionWhereInput.schema';

export const SubmissionUpdateManySchema: z.ZodType<Prisma.SubmissionUpdateManyArgs> = z.object({ data: SubmissionUpdateManyMutationInputObjectSchema, where: SubmissionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SubmissionUpdateManyArgs>;

export const SubmissionUpdateManyZodSchema = z.object({ data: SubmissionUpdateManyMutationInputObjectSchema, where: SubmissionWhereInputObjectSchema.optional() }).strict();