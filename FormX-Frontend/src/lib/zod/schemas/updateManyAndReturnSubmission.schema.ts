import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionSelectObjectSchema as SubmissionSelectObjectSchema } from './objects/SubmissionSelect.schema';
import { SubmissionUpdateManyMutationInputObjectSchema as SubmissionUpdateManyMutationInputObjectSchema } from './objects/SubmissionUpdateManyMutationInput.schema';
import { SubmissionWhereInputObjectSchema as SubmissionWhereInputObjectSchema } from './objects/SubmissionWhereInput.schema';

export const SubmissionUpdateManyAndReturnSchema: z.ZodType<Prisma.SubmissionUpdateManyAndReturnArgs> = z.object({ select: SubmissionSelectObjectSchema.optional(), data: SubmissionUpdateManyMutationInputObjectSchema, where: SubmissionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SubmissionUpdateManyAndReturnArgs>;

export const SubmissionUpdateManyAndReturnZodSchema = z.object({ select: SubmissionSelectObjectSchema.optional(), data: SubmissionUpdateManyMutationInputObjectSchema, where: SubmissionWhereInputObjectSchema.optional() }).strict();