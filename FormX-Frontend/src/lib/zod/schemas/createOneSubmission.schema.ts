import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionSelectObjectSchema as SubmissionSelectObjectSchema } from './objects/SubmissionSelect.schema';
import { SubmissionIncludeObjectSchema as SubmissionIncludeObjectSchema } from './objects/SubmissionInclude.schema';
import { SubmissionCreateInputObjectSchema as SubmissionCreateInputObjectSchema } from './objects/SubmissionCreateInput.schema';
import { SubmissionUncheckedCreateInputObjectSchema as SubmissionUncheckedCreateInputObjectSchema } from './objects/SubmissionUncheckedCreateInput.schema';

export const SubmissionCreateOneSchema: z.ZodType<Prisma.SubmissionCreateArgs> = z.object({ select: SubmissionSelectObjectSchema.optional(), include: SubmissionIncludeObjectSchema.optional(), data: z.union([SubmissionCreateInputObjectSchema, SubmissionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.SubmissionCreateArgs>;

export const SubmissionCreateOneZodSchema = z.object({ select: SubmissionSelectObjectSchema.optional(), include: SubmissionIncludeObjectSchema.optional(), data: z.union([SubmissionCreateInputObjectSchema, SubmissionUncheckedCreateInputObjectSchema]) }).strict();