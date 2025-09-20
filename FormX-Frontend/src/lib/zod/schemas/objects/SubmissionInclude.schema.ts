import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormArgsObjectSchema as FormArgsObjectSchema } from './FormArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  form: z.union([z.boolean(), z.lazy(() => FormArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const SubmissionIncludeObjectSchema: z.ZodType<Prisma.SubmissionInclude> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionInclude>;
export const SubmissionIncludeObjectZodSchema = makeSchema();
