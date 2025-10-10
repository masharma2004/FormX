import { describe, it, expect } from 'vitest';

/**
 * FormX Frontend Tests
 * 
 * These are pure unit tests for utility functions and business logic.
 * Service tests require mocking which has compatibility issues with rolldown-vite.
 * For full integration testing, use Playwright or Cypress.
 */

// ============================================
// UTILITY FUNCTION TESTS
// ============================================
describe('Utility Functions', () => {
    describe('Form Schema Parsing', () => {
        // Helper function that mimics schema parsing in components
        const getFields = (schema: unknown): Array<{ id: string; name: string; type: string }> => {
            if (typeof schema === 'string') {
                try {
                    const parsed = JSON.parse(schema);
                    return Array.isArray(parsed) ? parsed : parsed.fields || [];
                } catch {
                    return [];
                }
            }
            if (Array.isArray(schema)) {
                return schema;
            }
            if (schema && typeof schema === 'object' && 'fields' in schema) {
                return (schema as { fields: Array<{ id: string; name: string; type: string }> }).fields || [];
            }
            return [];
        };

        it('should handle array schema format', () => {
            const schema = [
                { id: '1', name: 'email', type: 'email' },
                { id: '2', name: 'name', type: 'text' },
            ];

            const fields = getFields(schema);

            expect(fields).toHaveLength(2);
            expect(fields[0].name).toBe('email');
            expect(fields[1].type).toBe('text');
        });

        it('should handle object schema format with fields property', () => {
            const schema = {
                fields: [
                    { id: '1', name: 'email', type: 'email' },
                    { id: '2', name: 'name', type: 'text' },
                ],
            };

            const fields = getFields(schema);

            expect(fields).toHaveLength(2);
            expect(fields[0].name).toBe('email');
        });

        it('should handle string schema format', () => {
            const schemaString = JSON.stringify({
                fields: [{ id: '1', name: 'email', type: 'email' }],
            });

            const fields = getFields(schemaString);

            expect(fields).toHaveLength(1);
            expect(fields[0].name).toBe('email');
        });

        it('should handle invalid schema gracefully', () => {
            expect(getFields(null)).toEqual([]);
            expect(getFields(undefined)).toEqual([]);
            expect(getFields('invalid json')).toEqual([]);
            expect(getFields({})).toEqual([]);
        });
    });

    describe('Field Value Lookup', () => {
        it('should use field.name for submission data lookup', () => {
            const submission = {
                data: {
                    email: 'test@example.com',
                    full_name: 'John Doe',
                    age: 25,
                } as Record<string, unknown>,
            };

            const field = { id: 'field_1', name: 'email', label: 'Email' };
            const value = submission.data[field.name];

            expect(value).toBe('test@example.com');
        });

        it('should handle missing field values', () => {
            const submission = {
                data: {
                    email: 'test@example.com',
                } as Record<string, unknown>,
            };

            const field = { id: 'field_2', name: 'missing_field', label: 'Missing' };
            const value = submission.data[field.name];

            expect(value).toBeUndefined();
        });
    });

    describe('Field Name Generation', () => {
        // Mimics how FormBuilder generates field names from labels
        const generateFieldName = (label: string): string => {
            return label
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '_')
                .replace(/^_|_$/g, '');
        };

        it('should generate valid field name from label', () => {
            expect(generateFieldName('Email Address')).toBe('email_address');
            expect(generateFieldName('Full Name')).toBe('full_name');
            expect(generateFieldName("What's your age?")).toBe('what_s_your_age');
        });

        it('should handle special characters', () => {
            expect(generateFieldName('Rate (1-5)')).toBe('rate_1_5');
            expect(generateFieldName('Price $')).toBe('price');
        });
    });

    describe('Duplicate Field Name Generation', () => {
        // Mimics how FormBuilder generates unique names for duplicated fields
        const generateUniqueName = (baseName: string, existingNames: string[]): string => {
            let newName = `${baseName}_copy`;
            let counter = 1;
            while (existingNames.includes(newName)) {
                newName = `${baseName}_copy_${counter}`;
                counter++;
            }
            return newName;
        };

        it('should generate unique name for duplicated field', () => {
            const existingNames = ['email', 'name'];
            const newName = generateUniqueName('email', existingNames);

            expect(newName).toBe('email_copy');
            expect(existingNames.includes(newName)).toBe(false);
        });

        it('should handle multiple duplicates', () => {
            const existingNames = ['email', 'email_copy', 'email_copy_1'];
            const newName = generateUniqueName('email', existingNames);

            expect(newName).toBe('email_copy_2');
        });
    });
});

// ============================================
// VALIDATION TESTS
// ============================================
describe('Validation Logic', () => {
    describe('Email Validation', () => {
        const isValidEmail = (email: string): boolean => {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        };

        it('should validate correct emails', () => {
            expect(isValidEmail('test@example.com')).toBe(true);
            expect(isValidEmail('user.name@domain.org')).toBe(true);
        });

        it('should reject invalid emails', () => {
            expect(isValidEmail('invalid')).toBe(false);
            expect(isValidEmail('missing@domain')).toBe(false);
            expect(isValidEmail('@nodomain.com')).toBe(false);
        });
    });

    describe('Required Field Validation', () => {
        const isFieldValid = (
            value: unknown,
            field: { required?: boolean; type?: string }
        ): boolean => {
            if (field.required) {
                if (value === null || value === undefined || value === '') {
                    return false;
                }
            }
            return true;
        };

        it('should validate required fields', () => {
            expect(isFieldValid('value', { required: true })).toBe(true);
            expect(isFieldValid('', { required: true })).toBe(false);
            expect(isFieldValid(null, { required: true })).toBe(false);
        });

        it('should pass optional fields', () => {
            expect(isFieldValid('', { required: false })).toBe(true);
            expect(isFieldValid(null, { required: false })).toBe(true);
        });
    });
});

// ============================================
// DATA TRANSFORMATION TESTS
// ============================================
describe('Data Transformations', () => {
    describe('Form Data Formatting', () => {
        const formatSubmissionData = (
            fields: Array<{ id: string; name: string; type: string }>,
            formData: Record<string, unknown>
        ): Record<string, unknown> => {
            const result: Record<string, unknown> = {};
            for (const field of fields) {
                result[field.name] = formData[field.id] ?? formData[field.name] ?? null;
            }
            return result;
        };

        it('should format submission data using field names', () => {
            const fields = [
                { id: 'field_1', name: 'email', type: 'email' },
                { id: 'field_2', name: 'name', type: 'text' },
            ];
            const formData = {
                field_1: 'test@example.com',
                field_2: 'John Doe',
            };

            const result = formatSubmissionData(fields, formData);

            expect(result).toEqual({
                email: 'test@example.com',
                name: 'John Doe',
            });
        });
    });
});
