import * as z from 'zod';

export const NocodbTableScalarFieldEnumSchema = z.enum(['id', 'tableId', 'formId', 'metadata', 'createdAt'])

export type NocodbTableScalarFieldEnum = z.infer<typeof NocodbTableScalarFieldEnumSchema>;