import * as z from 'zod';

export const FormScalarFieldEnumSchema = z.enum(['id', 'title', 'description', 'schema', 'settings', 'isActive', 'isPublic', 'userId', 'createdAt', 'updatedAt'])

export type FormScalarFieldEnum = z.infer<typeof FormScalarFieldEnumSchema>;