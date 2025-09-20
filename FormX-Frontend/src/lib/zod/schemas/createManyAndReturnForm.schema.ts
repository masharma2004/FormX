import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormSelectObjectSchema as FormSelectObjectSchema } from './objects/FormSelect.schema';
import { FormCreateManyInputObjectSchema as FormCreateManyInputObjectSchema } from './objects/FormCreateManyInput.schema';

export const FormCreateManyAndReturnSchema: z.ZodType<Prisma.FormCreateManyAndReturnArgs> = z.object({ select: FormSelectObjectSchema.optional(), data: z.union([ FormCreateManyInputObjectSchema, z.array(FormCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FormCreateManyAndReturnArgs>;

export const FormCreateManyAndReturnZodSchema = z.object({ select: FormSelectObjectSchema.optional(), data: z.union([ FormCreateManyInputObjectSchema, z.array(FormCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();