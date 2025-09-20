import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './objects/FormWhereInput.schema';
import { FormOrderByWithAggregationInputObjectSchema as FormOrderByWithAggregationInputObjectSchema } from './objects/FormOrderByWithAggregationInput.schema';
import { FormScalarWhereWithAggregatesInputObjectSchema as FormScalarWhereWithAggregatesInputObjectSchema } from './objects/FormScalarWhereWithAggregatesInput.schema';
import { FormScalarFieldEnumSchema } from './enums/FormScalarFieldEnum.schema';
import { FormCountAggregateInputObjectSchema as FormCountAggregateInputObjectSchema } from './objects/FormCountAggregateInput.schema';
import { FormMinAggregateInputObjectSchema as FormMinAggregateInputObjectSchema } from './objects/FormMinAggregateInput.schema';
import { FormMaxAggregateInputObjectSchema as FormMaxAggregateInputObjectSchema } from './objects/FormMaxAggregateInput.schema';

export const FormGroupBySchema: z.ZodType<Prisma.FormGroupByArgs> = z.object({ where: FormWhereInputObjectSchema.optional(), orderBy: z.union([FormOrderByWithAggregationInputObjectSchema, FormOrderByWithAggregationInputObjectSchema.array()]).optional(), having: FormScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(FormScalarFieldEnumSchema), _count: z.union([ z.literal(true), FormCountAggregateInputObjectSchema ]).optional(), _min: FormMinAggregateInputObjectSchema.optional(), _max: FormMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.FormGroupByArgs>;

export const FormGroupByZodSchema = z.object({ where: FormWhereInputObjectSchema.optional(), orderBy: z.union([FormOrderByWithAggregationInputObjectSchema, FormOrderByWithAggregationInputObjectSchema.array()]).optional(), having: FormScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(FormScalarFieldEnumSchema), _count: z.union([ z.literal(true), FormCountAggregateInputObjectSchema ]).optional(), _min: FormMinAggregateInputObjectSchema.optional(), _max: FormMaxAggregateInputObjectSchema.optional() }).strict();