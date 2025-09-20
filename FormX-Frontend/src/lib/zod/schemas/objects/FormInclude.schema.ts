import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { SubmissionFindManySchema as SubmissionFindManySchema } from '../findManySubmission.schema';
import { FormScriptFindManySchema as FormScriptFindManySchema } from '../findManyFormScript.schema';
import { NocodbTableArgsObjectSchema as NocodbTableArgsObjectSchema } from './NocodbTableArgs.schema';
import { FormCountOutputTypeArgsObjectSchema as FormCountOutputTypeArgsObjectSchema } from './FormCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  submissions: z.union([z.boolean(), z.lazy(() => SubmissionFindManySchema)]).optional(),
  scripts: z.union([z.boolean(), z.lazy(() => FormScriptFindManySchema)]).optional(),
  nocodbTable: z.union([z.boolean(), z.lazy(() => NocodbTableArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => FormCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const FormIncludeObjectSchema: z.ZodType<Prisma.FormInclude> = makeSchema() as unknown as z.ZodType<Prisma.FormInclude>;
export const FormIncludeObjectZodSchema = makeSchema();
