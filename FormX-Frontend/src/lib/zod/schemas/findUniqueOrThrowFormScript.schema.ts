import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormScriptSelectObjectSchema as FormScriptSelectObjectSchema } from './objects/FormScriptSelect.schema';
import { FormScriptIncludeObjectSchema as FormScriptIncludeObjectSchema } from './objects/FormScriptInclude.schema';
import { FormScriptWhereUniqueInputObjectSchema as FormScriptWhereUniqueInputObjectSchema } from './objects/FormScriptWhereUniqueInput.schema';

export const FormScriptFindUniqueOrThrowSchema: z.ZodType<Prisma.FormScriptFindUniqueOrThrowArgs> = z.object({ select: FormScriptSelectObjectSchema.optional(), include: FormScriptIncludeObjectSchema.optional(), where: FormScriptWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FormScriptFindUniqueOrThrowArgs>;

export const FormScriptFindUniqueOrThrowZodSchema = z.object({ select: FormScriptSelectObjectSchema.optional(), include: FormScriptIncludeObjectSchema.optional(), where: FormScriptWhereUniqueInputObjectSchema }).strict();