import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionSelectObjectSchema as SubmissionSelectObjectSchema } from './objects/SubmissionSelect.schema';
import { SubmissionIncludeObjectSchema as SubmissionIncludeObjectSchema } from './objects/SubmissionInclude.schema';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './objects/SubmissionWhereUniqueInput.schema';

export const SubmissionFindUniqueOrThrowSchema: z.ZodType<Prisma.SubmissionFindUniqueOrThrowArgs> = z.object({ select: SubmissionSelectObjectSchema.optional(), include: SubmissionIncludeObjectSchema.optional(), where: SubmissionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SubmissionFindUniqueOrThrowArgs>;

export const SubmissionFindUniqueOrThrowZodSchema = z.object({ select: SubmissionSelectObjectSchema.optional(), include: SubmissionIncludeObjectSchema.optional(), where: SubmissionWhereUniqueInputObjectSchema }).strict();