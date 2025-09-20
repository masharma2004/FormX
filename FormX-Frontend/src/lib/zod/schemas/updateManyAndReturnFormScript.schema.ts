import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormScriptSelectObjectSchema as FormScriptSelectObjectSchema } from './objects/FormScriptSelect.schema';
import { FormScriptUpdateManyMutationInputObjectSchema as FormScriptUpdateManyMutationInputObjectSchema } from './objects/FormScriptUpdateManyMutationInput.schema';
import { FormScriptWhereInputObjectSchema as FormScriptWhereInputObjectSchema } from './objects/FormScriptWhereInput.schema';

export const FormScriptUpdateManyAndReturnSchema: z.ZodType<Prisma.FormScriptUpdateManyAndReturnArgs> = z.object({ select: FormScriptSelectObjectSchema.optional(), data: FormScriptUpdateManyMutationInputObjectSchema, where: FormScriptWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FormScriptUpdateManyAndReturnArgs>;

export const FormScriptUpdateManyAndReturnZodSchema = z.object({ select: FormScriptSelectObjectSchema.optional(), data: FormScriptUpdateManyMutationInputObjectSchema, where: FormScriptWhereInputObjectSchema.optional() }).strict();