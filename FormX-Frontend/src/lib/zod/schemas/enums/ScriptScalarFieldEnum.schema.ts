import * as z from 'zod';

export const ScriptScalarFieldEnumSchema = z.enum(['id', 'name', 'code', 'description', 'userId', 'createdAt', 'updatedAt'])

export type ScriptScalarFieldEnum = z.infer<typeof ScriptScalarFieldEnumSchema>;