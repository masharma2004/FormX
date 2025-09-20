import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionSelectObjectSchema as SubmissionSelectObjectSchema } from './objects/SubmissionSelect.schema';
import { SubmissionIncludeObjectSchema as SubmissionIncludeObjectSchema } from './objects/SubmissionInclude.schema';
import { SubmissionWhereUniqueInputObjectSchema as SubmissionWhereUniqueInputObjectSchema } from './objects/SubmissionWhereUniqueInput.schema';
import { SubmissionCreateInputObjectSchema as SubmissionCreateInputObjectSchema } from './objects/SubmissionCreateInput.schema';
import { SubmissionUncheckedCreateInputObjectSchema as SubmissionUncheckedCreateInputObjectSchema } from './objects/SubmissionUncheckedCreateInput.schema';
import { SubmissionUpdateInputObjectSchema as SubmissionUpdateInputObjectSchema } from './objects/SubmissionUpdateInput.schema';
import { SubmissionUncheckedUpdateInputObjectSchema as SubmissionUncheckedUpdateInputObjectSchema } from './objects/SubmissionUncheckedUpdateInput.schema';

export const SubmissionUpsertOneSchema: z.ZodType<Prisma.SubmissionUpsertArgs> = z.object({ select: SubmissionSelectObjectSchema.optional(), include: SubmissionIncludeObjectSchema.optional(), where: SubmissionWhereUniqueInputObjectSchema, create: z.union([ SubmissionCreateInputObjectSchema, SubmissionUncheckedCreateInputObjectSchema ]), update: z.union([ SubmissionUpdateInputObjectSchema, SubmissionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.SubmissionUpsertArgs>;

export const SubmissionUpsertOneZodSchema = z.object({ select: SubmissionSelectObjectSchema.optional(), include: SubmissionIncludeObjectSchema.optional(), where: SubmissionWhereUniqueInputObjectSchema, create: z.union([ SubmissionCreateInputObjectSchema, SubmissionUncheckedCreateInputObjectSchema ]), update: z.union([ SubmissionUpdateInputObjectSchema, SubmissionUncheckedUpdateInputObjectSchema ]) }).strict();