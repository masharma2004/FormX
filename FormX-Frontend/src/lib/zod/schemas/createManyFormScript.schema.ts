import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormScriptCreateManyInputObjectSchema as FormScriptCreateManyInputObjectSchema } from './objects/FormScriptCreateManyInput.schema';

export const FormScriptCreateManySchema: z.ZodType<Prisma.FormScriptCreateManyArgs> = z.object({ data: z.union([ FormScriptCreateManyInputObjectSchema, z.array(FormScriptCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FormScriptCreateManyArgs>;

export const FormScriptCreateManyZodSchema = z.object({ data: z.union([ FormScriptCreateManyInputObjectSchema, z.array(FormScriptCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();