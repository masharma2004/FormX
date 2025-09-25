import { useDraggable } from '@dnd-kit/core';
import {
  Type,
  Mail,
  Link2,
  Phone,
  Hash,
  Calendar,
  AlignLeft,
  ChevronDown,
  CircleDot,
  CheckSquare,
  Upload,
  Star,
} from 'lucide-react';
import type { FieldType } from '../../lib/types';

interface FieldLibraryProps {
  onAddField: (type: FieldType) => void;
}

const FIELD_TYPES: { type: FieldType; label: string; icon: typeof Type }[] = [
  { type: 'text', label: 'Text', icon: Type },
  { type: 'email', label: 'Email', icon: Mail },
  { type: 'url', label: 'URL', icon: Link2 },
  { type: 'phone', label: 'Phone', icon: Phone },
  { type: 'number', label: 'Number', icon: Hash },
  { type: 'date', label: 'Date', icon: Calendar },
  { type: 'textarea', label: 'Textarea', icon: AlignLeft },
  { type: 'select', label: 'Select', icon: ChevronDown },
  { type: 'radio', label: 'Radio', icon: CircleDot },
  { type: 'checkbox', label: 'Checkbox', icon: CheckSquare },
  { type: 'file', label: 'File Upload', icon: Upload },
  { type: 'rating', label: 'Rating', icon: Star },
];

function DraggableFieldButton({
  type,
  label,
  icon: Icon,
  onAddField,
}: {
  type: FieldType;
  label: string;
  icon: typeof Type;
  onAddField: (type: FieldType) => void;
}) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `new-${type}`,
    data: { type: 'NEW_FIELD', fieldType: type },
  });

  return (
    <button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      type="button"
      onClick={() => onAddField(type)}
      className={`w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-colors text-left ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <Icon className="w-4 h-4 text-gray-500" />
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </button>
  );
}

export default function FieldLibrary({ onAddField }: FieldLibraryProps) {
  return (
    <div className="p-4">
      <h3 className="text-sm font-semibold text-gray-900 mb-4 px-2">Field Types</h3>
      <div className="space-y-2">
        {FIELD_TYPES.map(({ type, label, icon }) => (
          <DraggableFieldButton
            key={type}
            type={type}
            label={label}
            icon={icon}
            onAddField={onAddField}
          />
        ))}
      </div>
    </div>
  );
}
