import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormSelectObjectSchema as FormSelectObjectSchema } from './objects/FormSelect.schema';
import { FormUpdateManyMutationInputObjectSchema as FormUpdateManyMutationInputObjectSchema } from './objects/FormUpdateManyMutationInput.schema';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './objects/FormWhereInput.schema';

export const FormUpdateManyAndReturnSchema: z.ZodType<Prisma.FormUpdateManyAndReturnArgs> = z.object({ select: FormSelectObjectSchema.optional(), data: FormUpdateManyMutationInputObjectSchema, where: FormWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FormUpdateManyAndReturnArgs>;

export const FormUpdateManyAndReturnZodSchema = z.object({ select: FormSelectObjectSchema.optional(), data: FormUpdateManyMutationInputObjectSchema, where: FormWhereInputObjectSchema.optional() }).strict();