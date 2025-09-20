import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormOrderByWithRelationInputObjectSchema as FormOrderByWithRelationInputObjectSchema } from './objects/FormOrderByWithRelationInput.schema';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './objects/FormWhereInput.schema';
import { FormWhereUniqueInputObjectSchema as FormWhereUniqueInputObjectSchema } from './objects/FormWhereUniqueInput.schema';
import { FormCountAggregateInputObjectSchema as FormCountAggregateInputObjectSchema } from './objects/FormCountAggregateInput.schema';
import { FormMinAggregateInputObjectSchema as FormMinAggregateInputObjectSchema } from './objects/FormMinAggregateInput.schema';
import { FormMaxAggregateInputObjectSchema as FormMaxAggregateInputObjectSchema } from './objects/FormMaxAggregateInput.schema';

export const FormAggregateSchema: z.ZodType<Prisma.FormAggregateArgs> = z.object({ orderBy: z.union([FormOrderByWithRelationInputObjectSchema, FormOrderByWithRelationInputObjectSchema.array()]).optional(), where: FormWhereInputObjectSchema.optional(), cursor: FormWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), FormCountAggregateInputObjectSchema ]).optional(), _min: FormMinAggregateInputObjectSchema.optional(), _max: FormMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FormAggregateArgs>;

export const FormAggregateZodSchema = z.object({ orderBy: z.union([FormOrderByWithRelationInputObjectSchema, FormOrderByWithRelationInputObjectSchema.array()]).optional(), where: FormWhereInputObjectSchema.optional(), cursor: FormWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), FormCountAggregateInputObjectSchema ]).optional(), _min: FormMinAggregateInputObjectSchema.optional(), _max: FormMaxAggregateInputObjectSchema.optional() }).strict();