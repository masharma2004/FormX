import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, type FieldValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { formService, type FormResultType } from '../services/formService';
import FieldRenderer from '../components/form-builder/FieldRenderer';
import { Button } from '../components/ui/Button';
import { toast } from 'sonner';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import type { Field } from '../lib/types';

/**
 * Public, unauthenticated form-fill entry point reached via shareable
 * `/f/:formId` links. Mirrors the validation/submission logic in
 * `pages/forms/FormFill.tsx` (reached via `/forms/fill/:id`), adapted to the
 * `formId` route param used for shared links.
 */
export default function PublicFormSubmission() {
  const { formId } = useParams<{ formId: string }>();
  const navigate = useNavigate();

  const [form, setForm] = useState<FormResultType | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const parseFormSchema = (schema: unknown): Field[] => {
    try {
      if (typeof schema === 'string') {
        const parsed = JSON.parse(schema);
        if (parsed && typeof parsed === 'object' && 'fields' in parsed) {
          return Array.isArray(parsed.fields) ? parsed.fields : [];
        }
        return Array.isArray(parsed) ? parsed : [];
      }
      if (schema && typeof schema === 'object' && 'fields' in schema) {
        const fields = (schema as { fields: Field[] }).fields;
        return Array.isArray(fields) ? fields : [];
      }
      if (Array.isArray(schema)) {
        return schema;
      }
      return [];
    } catch {
      return [];
    }
  };

  const buildValidationSchema = (fields: Field[]) => {
    const shape: Record<string, z.ZodTypeAny> = {};

    fields.forEach((field) => {
      let fieldSchema: z.ZodTypeAny;

      switch (field.type) {
        case 'email':
          fieldSchema = z.email('Please enter a valid email');
          break;
        case 'number':
          fieldSchema = z.coerce.number({ message: 'Please enter a valid number' });
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
      }

      if (field.required) {
        if (field.type === 'checkbox') {
          fieldSchema = (fieldSchema as z.ZodArray<z.ZodString>).min(1, `${field.label} is required`);
        } else {
          fieldSchema = fieldSchema.refine(
            (val) => {
              if (typeof val === 'string') return val.trim() !== '';
              if (typeof val === 'number') return !isNaN(val);
              return val !== null && val !== undefined;
            },
            { message: `${field.label} is required` }
          );
        }
      } else {
        fieldSchema = fieldSchema.optional();
      }

      shape[field.id] = fieldSchema;
    });

    return z.object(shape);
  };

  const formFields = form?.schema ? parseFormSchema(form.schema) : [];

  const getDefaultValues = (): FieldValues => {
    const defaults: FieldValues = {};
    formFields.forEach((field) => {
      defaults[field.id] = field.type === 'checkbox' ? [] : '';
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
    resolver: formFields.length > 0 ? zodResolver(buildValidationSchema(formFields)) : undefined,
    defaultValues: getDefaultValues(),
    mode: 'onBlur',
  });

  useEffect(() => {
    if (formId) {
      loadForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formId]);

  useEffect(() => {
    if (formFields.length > 0) {
      reset(getDefaultValues());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form]);

  const loadForm = async () => {
    if (!formId) return;
    setLoading(true);
    setError(null);

    try {
      const formData = await formService.getFormById(formId);

      if (!formData.isPublic) {
        setError('This form is not published yet.');
        return;
      }

      setForm(formData);
    } catch (err) {
      const message =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        'Failed to load form';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (data: FieldValues) => {
    if (!formId) return;
    setSubmitting(true);

    try {
      const cleanedData: Record<string, unknown> = {};
      Object.keys(data).forEach((key) => {
        const value = data[key];
        if (value !== '' || typeof value === 'number') {
          cleanedData[key] = value;
        }
      });

      await formService.submitForm(formId, { data: cleanedData });
      setSubmitted(true);
      toast.success('Form submitted successfully!');
    } catch (err) {
      const axiosError = err as { response?: { data?: { message?: string; error?: string } } };
      const message =
        axiosError?.response?.data?.message ||
        axiosError?.response?.data?.error ||
        (err as Error)?.message ||
        'Failed to submit form';
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

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

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Thank you!</h2>
          <p className="text-gray-600 mb-6">Your response has been recorded successfully.</p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Submit Another Response
          </Button>
        </div>
      </div>
    );
  }

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
          <Button onClick={() => navigate('/')} className="mt-4">
            Go to Homepage
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{form.title}</h1>
            {form.description && <p className="text-gray-600">{form.description}</p>}
          </div>

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

            <div className="pt-6 border-t border-gray-200">
              <Button type="submit" className="w-full sm:w-auto px-8" disabled={submitting}>
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

        <div className="text-center mt-6 text-sm text-gray-500">Powered by FormX</div>
      </div>
    </div>
  );
}
