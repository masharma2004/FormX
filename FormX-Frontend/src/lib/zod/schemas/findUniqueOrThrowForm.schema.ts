import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormSelectObjectSchema as FormSelectObjectSchema } from './objects/FormSelect.schema';
import { FormIncludeObjectSchema as FormIncludeObjectSchema } from './objects/FormInclude.schema';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './objects/FormWhereUniqueInput.schema';

export const FormFindUniqueOrThrowSchema: z.ZodType<Prisma.FormFindUniqueOrThrowArgs> = z.object({ select: FormSelectObjectSchema.optional(), include: FormIncludeObjectSchema.optional(), where: FormWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.FormFindUniqueOrThrowArgs>;

export const FormFindUniqueOrThrowZodSchema = z.object({ select: FormSelectObjectSchema.optional(), include: FormIncludeObjectSchema.optional(), where: FormWhereUniqueInputObjectSchema }).strict();