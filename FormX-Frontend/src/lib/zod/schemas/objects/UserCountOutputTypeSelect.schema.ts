import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCountOutputTypeCountFormsArgsObjectSchema as UserCountOutputTypeCountFormsArgsObjectSchema } from './UserCountOutputTypeCountFormsArgs.schema';
import { UserCountOutputTypeCountScriptsArgsObjectSchema as UserCountOutputTypeCountScriptsArgsObjectSchema } from './UserCountOutputTypeCountScriptsArgs.schema';
import { UserCountOutputTypeCountAiUsageArgsObjectSchema as UserCountOutputTypeCountAiUsageArgsObjectSchema } from './UserCountOutputTypeCountAiUsageArgs.schema';
import { UserCountOutputTypeCountSubmissionsArgsObjectSchema as UserCountOutputTypeCountSubmissionsArgsObjectSchema } from './UserCountOutputTypeCountSubmissionsArgs.schema';
import { UserCountOutputTypeCountPasswordResetTokensArgsObjectSchema as UserCountOutputTypeCountPasswordResetTokensArgsObjectSchema } from './UserCountOutputTypeCountPasswordResetTokensArgs.schema'

const makeSchema = () => z.object({
  forms: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountFormsArgsObjectSchema)]).optional(),
  scripts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountScriptsArgsObjectSchema)]).optional(),
  aiUsage: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAiUsageArgsObjectSchema)]).optional(),
  submissions: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSubmissionsArgsObjectSchema)]).optional(),
  passwordResetTokens: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountPasswordResetTokensArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
