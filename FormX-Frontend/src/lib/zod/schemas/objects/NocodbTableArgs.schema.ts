import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { NocodbTableSelectObjectSchema as NocodbTableSelectObjectSchema } from './NocodbTableSelect.schema';
import { NocodbTableIncludeObjectSchema as NocodbTableIncludeObjectSchema } from './NocodbTableInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => NocodbTableSelectObjectSchema).optional(),
  include: z.lazy(() => NocodbTableIncludeObjectSchema).optional()
}).strict();
export const NocodbTableArgsObjectSchema = makeSchema();
export const NocodbTableArgsObjectZodSchema = makeSchema();
