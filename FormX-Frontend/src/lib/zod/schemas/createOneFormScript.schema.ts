import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormScriptSelectObjectSchema as FormScriptSelectObjectSchema } from './objects/FormScriptSelect.schema';
import { FormScriptIncludeObjectSchema as FormScriptIncludeObjectSchema } from './objects/FormScriptInclude.schema';
import { FormScriptCreateInputObjectSchema as FormScriptCreateInputObjectSchema } from './objects/FormScriptCreateInput.schema';
import { FormScriptUncheckedCreateInputObjectSchema as FormScriptUncheckedCreateInputObjectSchema } from './objects/FormScriptUncheckedCreateInput.schema';

export const FormScriptCreateOneSchema: z.ZodType<Prisma.FormScriptCreateArgs> = z.object({ select: FormScriptSelectObjectSchema.optional(), include: FormScriptIncludeObjectSchema.optional(), data: z.union([FormScriptCreateInputObjectSchema, FormScriptUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.FormScriptCreateArgs>;

export const FormScriptCreateOneZodSchema = z.object({ select: FormScriptSelectObjectSchema.optional(), include: FormScriptIncludeObjectSchema.optional(), data: z.union([FormScriptCreateInputObjectSchema, FormScriptUncheckedCreateInputObjectSchema]) }).strict();