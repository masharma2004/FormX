import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormScriptSelectObjectSchema as FormScriptSelectObjectSchema } from './objects/FormScriptSelect.schema';
import { FormScriptCreateManyInputObjectSchema as FormScriptCreateManyInputObjectSchema } from './objects/FormScriptCreateManyInput.schema';

export const FormScriptCreateManyAndReturnSchema: z.ZodType<Prisma.FormScriptCreateManyAndReturnArgs> = z.object({ select: FormScriptSelectObjectSchema.optional(), data: z.union([ FormScriptCreateManyInputObjectSchema, z.array(FormScriptCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.FormScriptCreateManyAndReturnArgs>;

export const FormScriptCreateManyAndReturnZodSchema = z.object({ select: FormScriptSelectObjectSchema.optional(), data: z.union([ FormScriptCreateManyInputObjectSchema, z.array(FormScriptCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();