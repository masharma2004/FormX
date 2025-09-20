import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormArgsObjectSchema as FormArgsObjectSchema } from './FormArgs.schema'

const makeSchema = () => z.object({
  form: z.union([z.boolean(), z.lazy(() => FormArgsObjectSchema)]).optional()
}).strict();
export const NocodbTableIncludeObjectSchema: z.ZodType<Prisma.NocodbTableInclude> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableInclude>;
export const NocodbTableIncludeObjectZodSchema = makeSchema();
