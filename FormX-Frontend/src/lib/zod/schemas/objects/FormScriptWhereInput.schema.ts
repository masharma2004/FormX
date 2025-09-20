import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { FormScalarRelationFilterObjectSchema as FormScalarRelationFilterObjectSchema } from './FormScalarRelationFilter.schema';
import { FormWhereInputObjectSchema as FormWhereInputObjectSchema } from './FormWhereInput.schema';
import { ScriptScalarRelationFilterObjectSchema as ScriptScalarRelationFilterObjectSchema } from './ScriptScalarRelationFilter.schema';
import { ScriptWhereInputObjectSchema as ScriptWhereInputObjectSchema } from './ScriptWhereInput.schema'

const formscriptwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => FormScriptWhereInputObjectSchema), z.lazy(() => FormScriptWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => FormScriptWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => FormScriptWhereInputObjectSchema), z.lazy(() => FormScriptWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  event: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  order: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  enabled: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  formId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  scriptId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  form: z.union([z.lazy(() => FormScalarRelationFilterObjectSchema), z.lazy(() => FormWhereInputObjectSchema)]).optional(),
  script: z.union([z.lazy(() => ScriptScalarRelationFilterObjectSchema), z.lazy(() => ScriptWhereInputObjectSchema)]).optional()
}).strict();
export const FormScriptWhereInputObjectSchema: z.ZodType<Prisma.FormScriptWhereInput> = formscriptwhereinputSchema as unknown as z.ZodType<Prisma.FormScriptWhereInput>;
export const FormScriptWhereInputObjectZodSchema = formscriptwhereinputSchema;
