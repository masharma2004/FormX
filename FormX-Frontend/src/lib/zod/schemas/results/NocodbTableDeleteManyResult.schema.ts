import * as z from 'zod';
export const NocodbTableDeleteManyResultSchema = z.object({
  count: z.number()
});