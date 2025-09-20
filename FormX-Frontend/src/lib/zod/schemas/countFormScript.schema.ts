import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormScriptOrderByWithRelationInputObjectSchema as FormScriptOrderByWithRelationInputObjectSchema } from './objects/FormScriptOrderByWithRelationInput.schema';
import { FormScriptWhereInputObjectSchema as FormScriptWhereInputObjectSchema } from './objects/FormScriptWhereInput.schema';
import { FormScriptWhereUniqueInputObjectSchema as FormScriptWhereUniqueInputObjectSchema } from './objects/FormScriptWhereUniqueInput.schema';
import { FormScriptCountAggregateInputObjectSchema as FormScriptCountAggregateInputObjectSchema } from './objects/FormScriptCountAggregateInput.schema';

export const FormScriptCountSchema: z.ZodType<Prisma.FormScriptCountArgs> = z.object({ orderBy: z.union([FormScriptOrderByWithRelationInputObjectSchema, FormScriptOrderByWithRelationInputObjectSchema.array()]).optional(), where: FormScriptWhereInputObjectSchema.optional(), cursor: FormScriptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FormScriptCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.FormScriptCountArgs>;

export const FormScriptCountZodSchema = z.object({ orderBy: z.union([FormScriptOrderByWithRelationInputObjectSchema, FormScriptOrderByWithRelationInputObjectSchema.array()]).optional(), where: FormScriptWhereInputObjectSchema.optional(), cursor: FormScriptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), FormScriptCountAggregateInputObjectSchema ]).optional() }).strict();