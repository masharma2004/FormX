import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { SubmissionFindManySchema as SubmissionFindManySchema } from '../findManySubmission.schema';
import { FormScriptFindManySchema as FormScriptFindManySchema } from '../findManyFormScript.schema';
import { NocodbTableArgsObjectSchema as NocodbTableArgsObjectSchema } from './NocodbTableArgs.schema';
import { FormCountOutputTypeArgsObjectSchema as FormCountOutputTypeArgsObjectSchema } from './FormCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  schema: z.boolean().optional(),
  settings: z.boolean().optional(),
  isActive: z.boolean().optional(),
  isPublic: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  submissions: z.union([z.boolean(), z.lazy(() => SubmissionFindManySchema)]).optional(),
  scripts: z.union([z.boolean(), z.lazy(() => FormScriptFindManySchema)]).optional(),
  nocodbTable: z.union([z.boolean(), z.lazy(() => NocodbTableArgsObjectSchema)]).optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => FormCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const FormSelectObjectSchema: z.ZodType<Prisma.FormSelect> = makeSchema() as unknown as z.ZodType<Prisma.FormSelect>;
export const FormSelectObjectZodSchema = makeSchema();
