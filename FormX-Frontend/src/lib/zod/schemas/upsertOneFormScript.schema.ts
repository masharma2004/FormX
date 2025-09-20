import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormScriptSelectObjectSchema as FormScriptSelectObjectSchema } from './objects/FormScriptSelect.schema';
import { FormScriptIncludeObjectSchema as FormScriptIncludeObjectSchema } from './objects/FormScriptInclude.schema';
import { FormScriptWhereUniqueInputObjectSchema as FormScriptWhereUniqueInputObjectSchema } from './objects/FormScriptWhereUniqueInput.schema';
import { FormScriptCreateInputObjectSchema as FormScriptCreateInputObjectSchema } from './objects/FormScriptCreateInput.schema';
import { FormScriptUncheckedCreateInputObjectSchema as FormScriptUncheckedCreateInputObjectSchema } from './objects/FormScriptUncheckedCreateInput.schema';
import { FormScriptUpdateInputObjectSchema as FormScriptUpdateInputObjectSchema } from './objects/FormScriptUpdateInput.schema';
import { FormScriptUncheckedUpdateInputObjectSchema as FormScriptUncheckedUpdateInputObjectSchema } from './objects/FormScriptUncheckedUpdateInput.schema';

export const FormScriptUpsertOneSchema: z.ZodType<Prisma.FormScriptUpsertArgs> = z.object({ select: FormScriptSelectObjectSchema.optional(), include: FormScriptIncludeObjectSchema.optional(), where: FormScriptWhereUniqueInputObjectSchema, create: z.union([ FormScriptCreateInputObjectSchema, FormScriptUncheckedCreateInputObjectSchema ]), update: z.union([ FormScriptUpdateInputObjectSchema, FormScriptUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.FormScriptUpsertArgs>;

export const FormScriptUpsertOneZodSchema = z.object({ select: FormScriptSelectObjectSchema.optional(), include: FormScriptIncludeObjectSchema.optional(), where: FormScriptWhereUniqueInputObjectSchema, create: z.union([ FormScriptCreateInputObjectSchema, FormScriptUncheckedCreateInputObjectSchema ]), update: z.union([ FormScriptUpdateInputObjectSchema, FormScriptUncheckedUpdateInputObjectSchema ]) }).strict();