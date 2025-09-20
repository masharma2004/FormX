import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormArgsObjectSchema as FormArgsObjectSchema } from './FormArgs.schema';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  data: z.boolean().optional(),
  metadata: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  formId: z.boolean().optional(),
  userId: z.boolean().optional(),
  form: z.union([z.boolean(), z.lazy(() => FormArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional()
}).strict();
export const SubmissionSelectObjectSchema: z.ZodType<Prisma.SubmissionSelect> = makeSchema() as unknown as z.ZodType<Prisma.SubmissionSelect>;
export const SubmissionSelectObjectZodSchema = makeSchema();
