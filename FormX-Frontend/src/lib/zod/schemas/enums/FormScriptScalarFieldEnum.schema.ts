import * as z from 'zod';

export const FormScriptScalarFieldEnumSchema = z.enum(['id', 'event', 'order', 'enabled', 'formId', 'scriptId', 'createdAt', 'updatedAt'])

export type FormScriptScalarFieldEnum = z.infer<typeof FormScriptScalarFieldEnumSchema>;