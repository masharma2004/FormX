import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormScriptWhereInputObjectSchema as FormScriptWhereInputObjectSchema } from './objects/FormScriptWhereInput.schema';

export const FormScriptDeleteManySchema: z.ZodType<Prisma.FormScriptDeleteManyArgs> = z.object({ where: FormScriptWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FormScriptDeleteManyArgs>;

export const FormScriptDeleteManyZodSchema = z.object({ where: FormScriptWhereInputObjectSchema.optional() }).strict();