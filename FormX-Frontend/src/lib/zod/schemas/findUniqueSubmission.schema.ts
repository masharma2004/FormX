import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionSelectObjectSchema as SubmissionSelectObjectSchema } from './objects/SubmissionSelect.schema';
import { SubmissionIncludeObjectSchema as SubmissionIncludeObjectSchema } from './objects/SubmissionInclude.schema';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './objects/SubmissionWhereUniqueInput.schema';

export const SubmissionFindUniqueSchema: z.ZodType<Prisma.SubmissionFindUniqueArgs> = z.object({ select: SubmissionSelectObjectSchema.optional(), include: SubmissionIncludeObjectSchema.optional(), where: SubmissionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SubmissionFindUniqueArgs>;

export const SubmissionFindUniqueZodSchema = z.object({ select: SubmissionSelectObjectSchema.optional(), include: SubmissionIncludeObjectSchema.optional(), where: SubmissionWhereUniqueInputObjectSchema }).strict();