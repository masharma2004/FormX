import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormFindManySchema as FormFindManySchema } from '../findManyForm.schema';
import { ScriptFindManySchema as ScriptFindManySchema } from '../findManyScript.schema';
import { AiUsageFindManySchema as AiUsageFindManySchema } from '../findManyAiUsage.schema';
import { SubmissionFindManySchema as SubmissionFindManySchema } from '../findManySubmission.schema';
import { PasswordResetTokenFindManySchema as PasswordResetTokenFindManySchema } from '../findManyPasswordResetToken.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  settings: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  forms: z.union([z.boolean(), z.lazy(() => FormFindManySchema)]).optional(),
  scripts: z.union([z.boolean(), z.lazy(() => ScriptFindManySchema)]).optional(),
  aiUsage: z.union([z.boolean(), z.lazy(() => AiUsageFindManySchema)]).optional(),
  submissions: z.union([z.boolean(), z.lazy(() => SubmissionFindManySchema)]).optional(),
  passwordResetTokens: z.union([z.boolean(), z.lazy(() => PasswordResetTokenFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
