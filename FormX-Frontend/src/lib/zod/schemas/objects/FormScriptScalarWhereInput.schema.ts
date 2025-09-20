import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const formscriptscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FormScriptScalarWhereInputObjectSchema), z.lazy(() => FormScriptScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FormScriptScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FormScriptScalarWhereInputObjectSchema), z.lazy(() => FormScriptScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  event: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  enabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  formId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  scriptId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const FormScriptScalarWhereInputObjectSchema: z.ZodType<Prisma.FormScriptScalarWhereInput> = formscriptscalarwhereinputSchema as unknown as z.ZodType<Prisma.FormScriptScalarWhereInput>;
export const FormScriptScalarWhereInputObjectZodSchema = formscriptscalarwhereinputSchema;
