import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormUpdateManyMutationInputObjectSchema as FormUpdateManyMutationInputObjectSchema } from './objects/FormUpdateManyMutationInput.schema';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './objects/FormWhereInput.schema';

export const FormUpdateManySchema: z.ZodType<Prisma.FormUpdateManyArgs> = z.object({ data: FormUpdateManyMutationInputObjectSchema, where: FormWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FormUpdateManyArgs>;

export const FormUpdateManyZodSchema = z.object({ data: FormUpdateManyMutationInputObjectSchema, where: FormWhereInputObjectSchema.optional() }).strict();