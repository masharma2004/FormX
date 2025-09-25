import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { formService } from '../../services/formService';
import FieldRenderer from '../../components/form-builder/FieldRenderer';
import { Button } from '../../components/ui/Button';
import { toast } from 'sonner';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

import type { FormResultType } from '../../lib/zod/schemas/variants/result/Form.result';
import type { Field } from '../../lib/types';

export default function FormFill() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [form, setForm] = useState<FormResultType | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const buildValidationSchema = (fields: Field[]) => {
    const shape: Record<string, z.ZodTypeAny> = {};

    if (!Array.isArray(fields) || fields.length === 0) {
      return z.object({}) as z.ZodObject<Record<string, z.ZodTypeAny>>;
    }

    fields.forEach((field) => {
      let fieldSchema: z.ZodTypeAny;

      switch (field.type) {
        case 'email':
          fieldSchema = z.email('Please enter a valid email');
          break;
        case 'number':
          fieldSchema = z.coerce.number({
            message: 'Please enter a valid number'
          });
          if (field.validation?.min !== undefined) {
            fieldSchema = (fieldSchema as z.ZodNumber).min(
              field.validation.min,
              `Minimum value is ${field.validation.min}`
            );
          }
          if (field.validation?.max !== undefined) {
            fieldSchema = (fieldSchema as z.ZodNumber).max(
              field.validation.max,
              `Maximum value is ${field.validation.max}`
            );
          }
          break;
        case 'url':
          fieldSchema = z.url('Please enter a valid URL');
          break;
        case 'checkbox':
          fieldSchema = z.array(z.string());
          break;
        case 'file':
          fieldSchema = z.any();
          break;
        case 'rating':
          fieldSchema = z.coerce.number().min(1).max(5);
          break;
        default:
          fieldSchema = z.string();
          if (field.validation?.minLength) {
            fieldSchema = (fieldSchema as z.ZodString).min(
              field.validation.minLength,
              `Minimum length is ${field.validation.minLength} characters`
            );
          }
          if (field.validation?.maxLength) {
            fieldSchema = (fieldSchema as z.ZodString).max(
              field.validation.maxLength,
              `Maximum length is ${field.validation.maxLength} characters`
            );
          }
      }

      if (field.required) {
        if (field.type === 'checkbox') {
          fieldSchema = (fieldSchema as z.ZodArray<z.ZodString>).min(
            1,
            `${field.label} is required`
          );
        } else {
          fieldSchema = fieldSchema.refine(
            (val) => {
              if (typeof val === 'string') return val.trim() !== '';
              if (typeof val === 'number') return !isNaN(val);
              return val !== null && val !== undefined;
            },
            {
              message: `${field.label} is required`,
            }
          );
        }
      } else {
        fieldSchema = fieldSchema.optional();
      }

      shape[field.id] = fieldSchema;
    });

    return z.object(shape);
  };

  // ✅ FIX: Parse schema properly
  const parseFormSchema = (schema: unknown): Field[] => {
    try {
      // If schema is a string, parse it
      if (typeof schema === 'string') {
        const parsed = JSON.parse(schema);

        // Check if parsed result has fields array
        if (parsed && typeof parsed === 'object' && 'fields' in parsed) {
          return Array.isArray(parsed.fields) ? parsed.fields : [];
        }

        // Check if parsed result is directly an array
        if (Array.isArray(parsed)) {
          return parsed;
        }

        return [];
      }

      // If schema is already an object with fields
      if (schema && typeof schema === 'object' && 'fields' in schema) {
        return Array.isArray((schema as { fields: Field[] }).fields)
          ? (schema as { fields: Field[] }).fields
          : [];
      }

      // If schema is directly an array
      if (Array.isArray(schema)) {
        return schema;
      }

      console.warn('Unexpected schema format:', schema);
      return [];
    } catch (error) {
      console.error('Error parsing form schema:', error);
      return [];
    }
  };

  // ✅ Use the new parser
  const formFields = form?.schema ? parseFormSchema(form.schema) : [];

  // Build default values from fields
  const getDefaultValues = (): FieldValues => {
    const defaults: FieldValues = {};
    formFields.forEach((field) => {
      if (field.type === 'checkbox') {
        defaults[field.id] = [];
      } else if (field.type === 'number' || field.type === 'rating') {
        defaults[field.id] = undefined;
      } else {
        defaults[field.id] = '';
      }
    });
    return defaults;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FieldValues>({
    resolver: formFields.length > 0
      ? zodResolver(buildValidationSchema(formFields))
      : undefined,
    defaultValues: getDefaultValues(),
    mode: 'onBlur',
  });

  useEffect(() => {
    if (id) {
      loadForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // Reset form when fields change
  useEffect(() => {
    if (formFields.length > 0) {
      reset(getDefaultValues());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  const loadForm = async () => {
    if (!id) return;

    setLoading(true);
    setError(null);

    try {
      const formData = await formService.getFormById(id);

      console.log('📋 Form loaded:', formData);
      console.log('📋 Schema type:', typeof formData.schema);
      console.log('📋 Schema value:', formData.schema);

      // Check if form is published
      if (!formData.isPublic) {
        setError('This form is not published yet.');
        return;
      }

      setForm(formData);

      // Debug: Log parsed fields
      const fields = parseFormSchema(formData.schema);
      console.log('✅ Parsed fields:', fields);
      console.log('✅ Field count:', fields.length);
    } catch (err) {
      const message =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        'Failed to load form';
      setError(message);
      console.error('Error loading form:', err);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: FieldValues) => {
    if (!id) return;

    setSubmitting(true);

    try {
      // Clean up the data before submission
      const cleanedData: Record<string, unknown> = {};

      Object.keys(data).forEach((key) => {
        const value = data[key];
        // Remove empty strings but keep other falsy values like 0
        if (value !== '' || typeof value === 'number') {
          cleanedData[key] = value;
        }
      });

      await formService.submitForm(id, { data: cleanedData });
      setSubmitted(true);
      toast.success('Form submitted successfully!');
    } catch (err) {
      if (err instanceof z.ZodError) {
        const firstError = err.issues[0];
        toast.error(`Validation error: ${firstError.message}`);
      } else {
        // Handle various error response formats
        const axiosError = err as { response?: { data?: { message?: string; error?: string } } };
        const message =
          axiosError?.response?.data?.message ||
          axiosError?.response?.data?.error ||
          (err as Error)?.message ||
          'Failed to submit form';
        
        toast.error(message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading form...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops!</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Button onClick={() => navigate('/')}>Go to Homepage</Button>
        </div>
      </div>
    );
  }

  // Success state
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Thank you!</h2>
          <p className="text-gray-600 mb-6">
            Your response has been recorded successfully.
          </p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Submit Another Response
          </Button>
        </div>
      </div>
    );
  }

  // Form state
  if (!form) return null;

  if (formFields.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center">
          <AlertCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Empty Form</h2>
          <p className="text-gray-600 mb-6">
            This form has no fields yet. Please contact the form creator.
          </p>
          <div className="text-left bg-gray-100 rounded p-4 text-xs mt-4">
            <p className="font-semibold mb-2">Debug Info:</p>
            <p>Form ID: {form.id}</p>
            <p>Schema Type: {typeof form.schema}</p>
            <p>Schema: {JSON.stringify(form.schema).substring(0, 100)}...</p>
          </div>
          <Button onClick={() => navigate('/')} className="mt-4">Go to Homepage</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Form Header */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{form.title}</h1>
            {form.description && <p className="text-gray-600">{form.description}</p>}

            {/* Debug info in dev mode */}
            {import.meta.env.DEV && (
              <div className="mt-4 text-xs text-gray-500">
                Fields loaded: {formFields.length}
              </div>
            )}
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {formFields.map((field) => (
              <div key={field.id} className="text-black space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>

                <FieldRenderer
                  field={field}
                  register={register}
                  errors={errors}
                  setValue={setValue}
                  watch={watch}
                  disabled={false}
                />

                {errors[field.id] && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors[field.id]?.message as string}
                  </p>
                )}
              </div>
            ))}

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200">
              <Button
                type="submit"
                className="w-full sm:w-auto px-8"
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Form'
                )}
              </Button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Powered by FormX
        </div>
      </div>
    </div>
  );
}