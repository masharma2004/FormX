import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useDroppable } from '@dnd-kit/core';
import { GripVertical, Copy, Trash2 } from 'lucide-react';
import type { Field } from '../../lib/types';
import FieldRenderer from './FieldRenderer';

interface FormCanvasProps {
  formTitle: string;
  formDescription: string;
  setFormDescription: (value: string) => void;
  fields: Field[];
  selectedField: Field | null;
  setSelectedField: (field: Field | null) => void;
  deleteField: (fieldId: string) => void;
  duplicateField: (fieldId: string) => void;
  isEditable: boolean;
}

function SortableFieldItem({
  field,
  isSelected,
  onSelect,
  onDelete,
  onDuplicate,
  isEditable,
}: {
  field: Field;
  isSelected: boolean;
  onSelect: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
  isEditable: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: field.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={onSelect}
      className={`bg-white rounded-lg border-2 p-4 cursor-pointer transition-colors ${
        isSelected ? 'border-blue-500 shadow-sm' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {isEditable && (
            <span
              {...attributes}
              {...listeners}
              className="cursor-grab text-gray-400 hover:text-gray-600"
              onClick={(e) => e.stopPropagation()}
            >
              <GripVertical className="w-4 h-4" />
            </span>
          )}
          <span className="text-sm font-medium text-gray-900">{field.label}</span>
          {field.required && <span className="text-red-500 text-xs">*</span>}
        </div>
        {isEditable && (
          <div className="flex items-center gap-1">
            <button
              title="Duplicate field"
              onClick={(e) => {
                e.stopPropagation();
                onDuplicate();
              }}
              className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
            >
              <Copy className="w-4 h-4" />
            </button>
            <button
              title="Delete field"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
      <div className="pointer-events-none opacity-90">
        <FieldRenderer field={field} disabled />
      </div>
    </div>
  );
}

export default function FormCanvas({
  formTitle,
  formDescription,
  setFormDescription,
  fields,
  selectedField,
  setSelectedField,
  deleteField,
  duplicateField,
  isEditable,
}: FormCanvasProps) {
  const { setNodeRef } = useDroppable({ id: 'form-canvas' });

  return (
    <div ref={setNodeRef} className="max-w-2xl mx-auto py-8 px-6">
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{formTitle}</h2>
        <textarea
          value={formDescription}
          onChange={(e) => setFormDescription(e.target.value)}
          placeholder="Add a description for your form (optional)"
          disabled={!isEditable}
          rows={2}
          className="w-full text-sm text-gray-600 border-0 focus:ring-0 resize-none p-0 disabled:bg-transparent"
        />
      </div>

      {fields.length === 0 ? (
        <div className="text-center py-16 border-2 border-dashed border-gray-300 rounded-lg">
          <p className="text-gray-500">
            Drag fields from the library or click a field type to add it here.
          </p>
        </div>
      ) : (
        <SortableContext items={fields.map((f) => f.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-4">
            {fields.map((field) => (
              <SortableFieldItem
                key={field.id}
                field={field}
                isSelected={selectedField?.id === field.id}
                onSelect={() => setSelectedField(field)}
                onDelete={() => deleteField(field.id)}
                onDuplicate={() => duplicateField(field.id)}
                isEditable={isEditable}
              />
            ))}
          </div>
        </SortableContext>
      )}
    </div>
  );
}
