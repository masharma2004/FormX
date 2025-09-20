import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './objects/FormWhereInput.schema';

export const FormDeleteManySchema: z.ZodType<Prisma.FormDeleteManyArgs> = z.object({ where: FormWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FormDeleteManyArgs>;

export const FormDeleteManyZodSchema = z.object({ where: FormWhereInputObjectSchema.optional() }).strict();