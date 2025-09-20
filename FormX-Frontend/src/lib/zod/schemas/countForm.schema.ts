import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormOrderByWithRelationInputObjectSchema as FormOrderByWithRelationInputObjectSchema } from './objects/FormOrderByWithRelationInput.schema';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './objects/FormWhereInput.schema';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './objects/FormWhereUniqueInput.schema';
import { FormCountAggregateInputObjectSchema as FormCountAggregateInputObjectSchema } from './objects/FormCountAggregateInput.schema';

export const FormCountSchema: z.ZodType<Prisma.FormCountArgs> = z.object({ orderBy: z.union([FormOrderByWithRelationInputObjectSchema, FormOrderByWithRelationInputObjectSchema.array()]).optional(), where: FormWhereInputObjectSchema.optional(), cursor: FormWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FormCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.FormCountArgs>;

export const FormCountZodSchema = z.object({ orderBy: z.union([FormOrderByWithRelationInputObjectSchema, FormOrderByWithRelationInputObjectSchema.array()]).optional(), where: FormWhereInputObjectSchema.optional(), cursor: FormWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FormCountAggregateInputObjectSchema ]).optional() }).strict();