import * as z from 'zod';
export const ScriptDeleteManyResultSchema = z.object({
  count: z.number()
});