import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const FormWhereUniqueInputObjectSchema: z.ZodType<Prisma.FormWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.FormWhereUniqueInput>;
export const FormWhereUniqueInputObjectZodSchema = makeSchema();
