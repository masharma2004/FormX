import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormSelectObjectSchema as FormSelectObjectSchema } from './objects/FormSelect.schema';
import { FormIncludeObjectSchema as FormIncludeObjectSchema } from './objects/FormInclude.schema';
import { FormUpdateInputObjectSchema as FormUpdateInputObjectSchema } from './objects/FormUpdateInput.schema';
import { FormUncheckedUpdateInputObjectSchema as FormUncheckedUpdateInputObjectSchema } from './objects/FormUncheckedUpdateInput.schema';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './objects/FormWhereUniqueInput.schema';

export const FormUpdateOneSchema: z.ZodType<Prisma.FormUpdateArgs> = z.object({ select: FormSelectObjectSchema.optional(), include: FormIncludeObjectSchema.optional(), data: z.union([FormUpdateInputObjectSchema, FormUncheckedUpdateInputObjectSchema]), where: FormWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FormUpdateArgs>;

export const FormUpdateOneZodSchema = z.object({ select: FormSelectObjectSchema.optional(), include: FormIncludeObjectSchema.optional(), data: z.union([FormUpdateInputObjectSchema, FormUncheckedUpdateInputObjectSchema]), where: FormWhereUniqueInputObjectSchema }).strict();