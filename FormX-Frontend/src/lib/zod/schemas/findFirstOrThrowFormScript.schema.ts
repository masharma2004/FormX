import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { FormScriptIncludeObjectSchema as FormScriptIncludeObjectSchema } from './objects/FormScriptInclude.schema';
import { FormScriptOrderByWithRelationInputObjectSchema as FormScriptOrderByWithRelationInputObjectSchema } from './objects/FormScriptOrderByWithRelationInput.schema';
import { FormScriptWhereInputObjectSchema as FormScriptWhereInputObjectSchema } from './objects/FormScriptWhereInput.schema';
import { FormScriptWhereUniqueInputObjectSchema as FormScriptWhereUniqueInputObjectSchema } from './objects/FormScriptWhereUniqueInput.schema';
import { FormScriptScalarFieldEnumSchema } from './enums/FormScriptScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const FormScriptFindFirstOrThrowSelectSchema: z.ZodType<Prisma.FormScriptSelect> = z.object({
    id: z.boolean().optional(),
    event: z.boolean().optional(),
    order: z.boolean().optional(),
    enabled: z.boolean().optional(),
    formId: z.boolean().optional(),
    scriptId: z.boolean().optional(),
    form: z.boolean().optional(),
    script: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.FormScriptSelect>;

export const FormScriptFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    event: z.boolean().optional(),
    order: z.boolean().optional(),
    enabled: z.boolean().optional(),
    formId: z.boolean().optional(),
    scriptId: z.boolean().optional(),
    form: z.boolean().optional(),
    script: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const FormScriptFindFirstOrThrowSchema: z.ZodType<Prisma.FormScriptFindFirstOrThrowArgs> = z.object({ select: FormScriptFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => FormScriptIncludeObjectSchema.optional()), orderBy: z.union([FormScriptOrderByWithRelationInputObjectSchema, FormScriptOrderByWithRelationInputObjectSchema.array()]).optional(), where: FormScriptWhereInputObjectSchema.optional(), cursor: FormScriptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FormScriptScalarFieldEnumSchema, FormScriptScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.FormScriptFindFirstOrThrowArgs>;

export const FormScriptFindFirstOrThrowZodSchema = z.object({ select: FormScriptFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => FormScriptIncludeObjectSchema.optional()), orderBy: z.union([FormScriptOrderByWithRelationInputObjectSchema, FormScriptOrderByWithRelationInputObjectSchema.array()]).optional(), where: FormScriptWhereInputObjectSchema.optional(), cursor: FormScriptWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([FormScriptScalarFieldEnumSchema, FormScriptScalarFieldEnumSchema.array()]).optional() }).strict();