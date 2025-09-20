import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormCountOutputTypeCountSubmissionsArgsObjectSchema as FormCountOutputTypeCountSubmissionsArgsObjectSchema } from './FormCountOutputTypeCountSubmissionsArgs.schema';
import { FormCountOutputTypeCountScriptsArgsObjectSchema as FormCountOutputTypeCountScriptsArgsObjectSchema } from './FormCountOutputTypeCountScriptsArgs.schema'

const makeSchema = () => z.object({
  submissions: z.union([z.boolean(), z.lazy(() => FormCountOutputTypeCountSubmissionsArgsObjectSchema)]).optional(),
  scripts: z.union([z.boolean(), z.lazy(() => FormCountOutputTypeCountScriptsArgsObjectSchema)]).optional()
}).strict();
export const FormCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.FormCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.FormCountOutputTypeSelect>;
export const FormCountOutputTypeSelectObjectZodSchema = makeSchema();
