import * as z from 'zod';
export const NocodbTableCreateManyResultSchema = z.object({
  count: z.number()
});