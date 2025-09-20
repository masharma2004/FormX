import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormCreateManyInputObjectSchema as FormCreateManyInputObjectSchema } from './objects/FormCreateManyInput.schema';

export const FormCreateManySchema: z.ZodType<Prisma.FormCreateManyArgs> = z.object({ data: z.union([ FormCreateManyInputObjectSchema, z.array(FormCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FormCreateManyArgs>;

export const FormCreateManyZodSchema = z.object({ data: z.union([ FormCreateManyInputObjectSchema, z.array(FormCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();