import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionSelectObjectSchema as SubmissionSelectObjectSchema } from './objects/SubmissionSelect.schema';
import { SubmissionIncludeObjectSchema as SubmissionIncludeObjectSchema } from './objects/SubmissionInclude.schema';
import { SubmissionUpdateInputObjectSchema as SubmissionUpdateInputObjectSchema } from './objects/SubmissionUpdateInput.schema';
import { SubmissionUncheckedUpdateInputObjectSchema as SubmissionUncheckedUpdateInputObjectSchema } from './objects/SubmissionUncheckedUpdateInput.schema';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './objects/SubmissionWhereUniqueInput.schema';

export const SubmissionUpdateOneSchema: z.ZodType<Prisma.SubmissionUpdateArgs> = z.object({ select: SubmissionSelectObjectSchema.optional(), include: SubmissionIncludeObjectSchema.optional(), data: z.union([SubmissionUpdateInputObjectSchema, SubmissionUncheckedUpdateInputObjectSchema]), where: SubmissionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SubmissionUpdateArgs>;

export const SubmissionUpdateOneZodSchema = z.object({ select: SubmissionSelectObjectSchema.optional(), include: SubmissionIncludeObjectSchema.optional(), data: z.union([SubmissionUpdateInputObjectSchema, SubmissionUncheckedUpdateInputObjectSchema]), where: SubmissionWhereUniqueInputObjectSchema }).strict();