import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormSelectObjectSchema as FormSelectObjectSchema } from './objects/FormSelect.schema';
import { FormIncludeObjectSchema as FormIncludeObjectSchema } from './objects/FormInclude.schema';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './objects/FormWhereUniqueInput.schema';

export const FormFindUniqueSchema: z.ZodType<Prisma.FormFindUniqueArgs> = z.object({ select: FormSelectObjectSchema.optional(), include: FormIncludeObjectSchema.optional(), where: FormWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FormFindUniqueArgs>;

export const FormFindUniqueZodSchema = z.object({ select: FormSelectObjectSchema.optional(), include: FormIncludeObjectSchema.optional(), where: FormWhereUniqueInputObjectSchema }).strict();