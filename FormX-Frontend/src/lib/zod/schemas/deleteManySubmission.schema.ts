import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SubmissionWhereInputObjectSchema as SubmissionWhereInputObjectSchema } from './objects/SubmissionWhereInput.schema';

export const SubmissionDeleteManySchema: z.ZodType<Prisma.SubmissionDeleteManyArgs> = z.object({ where: SubmissionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.SubmissionDeleteManyArgs>;

export const SubmissionDeleteManyZodSchema = z.object({ where: SubmissionWhereInputObjectSchema.optional() }).strict();