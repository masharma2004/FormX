import type { FormResultType, SubmissionResultType } from '../../services/formService';
import type { Field } from '../../lib/types';
import { Calendar } from 'lucide-react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';

interface ResponseDetailModalProps {
  form: FormResultType;
  submission: SubmissionResultType;
  onClose: () => void;
}

export default function ResponseDetailModal({ form, submission, onClose }: ResponseDetailModalProps) {
  const formatDate = (dateInput: string | Date) => {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  // Parse fields from schema - handle both array format and {fields: Field[]} format
  const getFields = (): Field[] => {
    const schema = form.schema as { fields?: Field[] } | Field[] | unknown;
    if (schema && typeof schema === 'object' && 'fields' in schema && Array.isArray(schema.fields)) {
      return schema.fields;
    }
    if (Array.isArray(schema)) {
      return schema;
    }
    return [];
  };

  const fields = getFields();

  const renderFieldValue = (field: Field) => {
    const data = submission.data as Record<string, unknown> | undefined;
    // Try field.id first (frontend stores data with field.id), fallback to field.name
    const value = data?.[field.id] ?? data?.[field.name];

    if (value === null || value === undefined) return <span className="text-gray-400">No answer</span>;

    // Handle different field types
    if (field.type === 'checkbox' && Array.isArray(value)) {
      return (
        <ul className="list-disc list-inside space-y-1">
          {value.map((item, idx) => (
            <li key={idx}>{String(item)}</li>
          ))}
        </ul>
      );
    }

    if (field.type === 'file') {
      if (typeof value === 'string') {
        return (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View File
          </a>
        );
      }
      return <span className="text-gray-400">File uploaded</span>;
    }

    if (field.type === 'rating' && typeof value === 'number') {
      return (
        <div className="flex items-center">
          {'⭐'.repeat(value)}
          <span className="ml-2 text-gray-600">({value}/5)</span>
        </div>
      );
    }

    if (typeof value === 'boolean') {
      return <span className={value ? 'text-green-600' : 'text-red-600'}>{value ? 'Yes' : 'No'}</span>;
    }

    return <div className="whitespace-pre-wrap break-words">{String(value)}</div>;
  };


  return (
    <Modal
      open
      onClose={onClose}
      title="Response Details"
      maxWidthClassName="max-w-3xl"
      footer={
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
      }
    >
      <div className="p-6">
        <div className="bg-gray-50 rounded-lg p-4 mb-6 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="font-medium mr-2">Submitted:</span>
            {formatDate(submission.createdAt)}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium mr-2">Response ID:</span>
            <code className="text-xs bg-gray-200 px-2 py-1 rounded">{submission.id}</code>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span className="font-medium mr-2">Form ID:</span>
            <code className="text-xs bg-gray-200 px-2 py-1 rounded">{submission.formId}</code>
          </div>
        </div>

        {fields.length === 0 ? (
          <p className="text-sm text-gray-500">No fields to display for this response.</p>
        ) : (
          <div className="space-y-6">
            {fields.map((field) => (
              <div key={field.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="mb-2">
                  <h3 className="text-sm font-medium text-gray-700 flex items-center">
                    {field.label}
                    {field.required && <span className="text-red-500 ml-1">*</span>}
                  </h3>
                  <p className="text-xs text-gray-500">{field.type}</p>
                </div>
                <div className="text-gray-900">{renderFieldValue(field)}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
}