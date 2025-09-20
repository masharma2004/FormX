import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  tableId: z.string().optional(),
  formId: z.string().optional()
}).strict();
export const NocodbTableWhereUniqueInputObjectSchema: z.ZodType<Prisma.NocodbTableWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.NocodbTableWhereUniqueInput>;
export const NocodbTableWhereUniqueInputObjectZodSchema = makeSchema();
