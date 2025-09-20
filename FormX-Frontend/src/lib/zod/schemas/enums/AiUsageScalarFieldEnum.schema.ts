import * as z from 'zod';

export const AiUsageScalarFieldEnumSchema = z.enum(['id', 'userId', 'operation', 'model', 'date', 'tokensUsed', 'cost', 'metadata', 'createdAt'])

export type AiUsageScalarFieldEnum = z.infer<typeof AiUsageScalarFieldEnumSchema>;