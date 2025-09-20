import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormSelectObjectSchema as FormSelectObjectSchema } from './objects/FormSelect.schema';
import { FormIncludeObjectSchema as FormIncludeObjectSchema } from './objects/FormInclude.schema';
import { FormCreateInputObjectSchema as FormCreateInputObjectSchema } from './objects/FormCreateInput.schema';
import { FormUncheckedCreateInputObjectSchema as FormUncheckedCreateInputObjectSchema } from './objects/FormUncheckedCreateInput.schema';

export const FormCreateOneSchema: z.ZodType<Prisma.FormCreateArgs> = z.object({ select: FormSelectObjectSchema.optional(), include: FormIncludeObjectSchema.optional(), data: z.union([FormCreateInputObjectSchema, FormUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.FormCreateArgs>;

export const FormCreateOneZodSchema = z.object({ select: FormSelectObjectSchema.optional(), include: FormIncludeObjectSchema.optional(), data: z.union([FormCreateInputObjectSchema, FormUncheckedCreateInputObjectSchema]) }).strict();