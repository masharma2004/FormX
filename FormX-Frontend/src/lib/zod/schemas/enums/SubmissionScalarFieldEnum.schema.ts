import * as z from 'zod';

export const SubmissionScalarFieldEnumSchema = z.enum(['id', 'data', 'metadata', 'status', 'createdAt', 'formId', 'userId'])

export type SubmissionScalarFieldEnum = z.infer<typeof SubmissionScalarFieldEnumSchema>;