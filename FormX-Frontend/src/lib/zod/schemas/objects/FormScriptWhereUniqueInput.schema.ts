import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { FormScriptFormIdScriptIdEventCompoundUniqueInputObjectSchema as FormScriptFormIdScriptIdEventCompoundUniqueInputObjectSchema } from './FormScriptFormIdScriptIdEventCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  formId_scriptId_event: z.lazy(() => FormScriptFormIdScriptIdEventCompoundUniqueInputObjectSchema).optional()
}).strict();
export const FormScriptWhereUniqueInputObjectSchema: z.ZodType<Prisma.FormScriptWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.FormScriptWhereUniqueInput>;
export const FormScriptWhereUniqueInputObjectZodSchema = makeSchema();
