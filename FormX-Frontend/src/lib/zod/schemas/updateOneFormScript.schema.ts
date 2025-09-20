import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormScriptSelectObjectSchema as FormScriptSelectObjectSchema } from './objects/FormScriptSelect.schema';
import { FormScriptIncludeObjectSchema as FormScriptIncludeObjectSchema } from './objects/FormScriptInclude.schema';
import { FormScriptUpdateInputObjectSchema as FormScriptUpdateInputObjectSchema } from './objects/FormScriptUpdateInput.schema';
import { FormScriptUncheckedUpdateInputObjectSchema as FormScriptUncheckedUpdateInputObjectSchema } from './objects/FormScriptUncheckedUpdateInput.schema';
import { FormScriptWhereUniqueInputObjectSchema as FormScriptWhereUniqueInputObjectSchema } from './objects/FormScriptWhereUniqueInput.schema';

export const FormScriptUpdateOneSchema: z.ZodType<Prisma.FormScriptUpdateArgs> = z.object({ select: FormScriptSelectObjectSchema.optional(), include: FormScriptIncludeObjectSchema.optional(), data: z.union([FormScriptUpdateInputObjectSchema, FormScriptUncheckedUpdateInputObjectSchema]), where: FormScriptWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FormScriptUpdateArgs>;

export const FormScriptUpdateOneZodSchema = z.object({ select: FormScriptSelectObjectSchema.optional(), include: FormScriptIncludeObjectSchema.optional(), data: z.union([FormScriptUpdateInputObjectSchema, FormScriptUncheckedUpdateInputObjectSchema]), where: FormScriptWhereUniqueInputObjectSchema }).strict();