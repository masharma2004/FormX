import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormSelectObjectSchema as FormSelectObjectSchema } from './objects/FormSelect.schema';
import { FormIncludeObjectSchema as FormIncludeObjectSchema } from './objects/FormInclude.schema';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './objects/FormWhereUniqueInput.schema';
import { FormCreateInputObjectSchema as FormCreateInputObjectSchema } from './objects/FormCreateInput.schema';
import { FormUncheckedCreateInputObjectSchema as FormUncheckedCreateInputObjectSchema } from './objects/FormUncheckedCreateInput.schema';
import { FormUpdateInputObjectSchema as FormUpdateInputObjectSchema } from './objects/FormUpdateInput.schema';
import { FormUncheckedUpdateInputObjectSchema as FormUncheckedUpdateInputObjectSchema } from './objects/FormUncheckedUpdateInput.schema';

export const FormUpsertOneSchema: z.ZodType<Prisma.FormUpsertArgs> = z.object({ select: FormSelectObjectSchema.optional(), include: FormIncludeObjectSchema.optional(), where: FormWhereUniqueInputObjectSchema, create: z.union([ FormCreateInputObjectSchema, FormUncheckedCreateInputObjectSchema ]), update: z.union([ FormUpdateInputObjectSchema, FormUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.FormUpsertArgs>;

export const FormUpsertOneZodSchema = z.object({ select: FormSelectObjectSchema.optional(), include: FormIncludeObjectSchema.optional(), where: FormWhereUniqueInputObjectSchema, create: z.union([ FormCreateInputObjectSchema, FormUncheckedCreateInputObjectSchema ]), update: z.union([ FormUpdateInputObjectSchema, FormUncheckedUpdateInputObjectSchema ]) }).strict();