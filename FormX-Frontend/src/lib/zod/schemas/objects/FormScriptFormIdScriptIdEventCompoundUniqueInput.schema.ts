import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  formId: z.string(),
  scriptId: z.string(),
  event: z.string()
}).strict();
export const FormScriptFormIdScriptIdEventCompoundUniqueInputObjectSchema: z.ZodType<Prisma.FormScriptFormIdScriptIdEventCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptFormIdScriptIdEventCompoundUniqueInput>;
export const FormScriptFormIdScriptIdEventCompoundUniqueInputObjectZodSchema = makeSchema();
