import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormScriptUpdateManyMutationInputObjectSchema as FormScriptUpdateManyMutationInputObjectSchema } from './objects/FormScriptUpdateManyMutationInput.schema';
import { FormScriptWhereInputObjectSchema as FormScriptWhereInputObjectSchema } from './objects/FormScriptWhereInput.schema';

export const FormScriptUpdateManySchema: z.ZodType<Prisma.FormScriptUpdateManyArgs> = z.object({ data: FormScriptUpdateManyMutationInputObjectSchema, where: FormScriptWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FormScriptUpdateManyArgs>;

export const FormScriptUpdateManyZodSchema = z.object({ data: FormScriptUpdateManyMutationInputObjectSchema, where: FormScriptWhereInputObjectSchema.optional() }).strict();