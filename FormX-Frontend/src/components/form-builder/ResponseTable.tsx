import type { FormResultType, SubmissionResultType } from '../../services/formService';
import type { Field } from '../../lib/types';
import { Eye, Trash2, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

interface ResponseTableProps {
  form: FormResultType;
  submissions: SubmissionResultType[];
  onView: (submission: SubmissionResultType) => void;
  onDelete: (submissionId: string) => void;
}

export default function ResponseTable({ form, submissions, onView, onDelete }: ResponseTableProps) {
  const formatDate = (dateInput: string | Date) => {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getFieldValue = (submission: SubmissionResultType, field: Field) => {
    const data = submission.data as Record<string, unknown> | undefined;
    // Try field.id first (frontend stores data with field.id), fallback to field.name
    const value = data?.[field.id] ?? data?.[field.name];
    if (value === null || value === undefined) return '-';
    if (Array.isArray(value)) return value.join(', ');
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    return String(value);
  };

   const getFields = (): Field[] => {
    if (!form || !form.schema) {
      console.warn('⚠️ No form or schema');
      return [];
    }

    const schema = form.schema as { fields?: Field[] } | Field[] | unknown;

    // Check if schema.fields exists and is an array
    if (schema && typeof schema === 'object' && 'fields' in schema && Array.isArray(schema.fields)) {
      console.log('✅ Found schema.fields:', schema.fields.length);
      return schema.fields;
    }

    // Check if schema itself is an array
    if (Array.isArray(schema)) {
      console.log('✅ Schema is array:', schema.length);
      return schema;
    }

    console.error('❌ Invalid schema:', schema);
    return [];
  };

  const fields = getFields();
  const displayFields = fields.slice(0, 5);

   // Add null safety check
   if (!submissions || submissions.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No submissions yet
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Submitted At
            </th>
            {displayFields.map((field) => (
              <th
                key={field.id}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {field.label}
              </th>
            ))}
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {submissions.map((submission) => (
            <tr key={submission.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  {formatDate(submission.createdAt)}
                </div>
              </td>
              {displayFields.map((field) => (
                <td key={field.id} className="px-6 py-4 text-sm text-gray-900">
                  <div className="max-w-xs truncate">
                    {getFieldValue(submission, field)}
                  </div>
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onView(submission)}
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onDelete(submission.id)}
                    className="!text-red-600 hover:!bg-red-50"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}