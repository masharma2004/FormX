import { useState } from 'react';
import type { Field } from '../../lib/types';
import { Input } from '../ui/Input';
import { Settings, Plus, Trash2 } from 'lucide-react';

interface FieldPropertiesProps {
  selectedField: Field | null;
  updateField: (id: string, updates: Partial<Field>) => void;
}

export default function FieldProperties({ selectedField, updateField }: FieldPropertiesProps) {
  const [newOption, setNewOption] = useState('');

  if (!selectedField) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center p-8">
          <Settings className="w-16 h-16 mx-auto text-gray-300 mb-4" />
          <p className="text-sm font-medium text-gray-500">Select a field to edit properties</p>
        </div>
      </div>
    );
  }

  const addOption = () => {
    if (!newOption.trim()) return;
    const currentOptions = selectedField.options || [];
    updateField(selectedField.id, {
      options: [...currentOptions, newOption.trim()],
    });
    setNewOption('');
  };

  const removeOption = (index: number) => {
    const currentOptions = selectedField.options || [];
    updateField(selectedField.id, {
      options: currentOptions.filter((_, i) => i !== index),
    });
  };

  const updateOption = (index: number, value: string) => {
    const currentOptions = selectedField.options || [];
    const newOptions = [...currentOptions];
    newOptions[index] = value;
    updateField(selectedField.id, { options: newOptions });
  };

  const hasOptions = ['select', 'radio', 'checkbox'].includes(selectedField.type);

  return (
    <div className="h-full">
      <div className="p-6">
        <div className="flex items-center mb-6 pb-4 border-b border-gray-200">
          <Settings className="w-6 h-6 text-blue-600 mr-2" />
          <h3 className="text-lg font-bold text-gray-900">Field Settings</h3>
        </div>

        {/* Script Name Info */}
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-blue-600 font-semibold">📝 Script Name:</span>
            <code className="bg-white px-2 py-0.5 rounded border border-blue-200 font-mono text-blue-800">
              {selectedField.name}
            </code>
          </div>
          <p className="text-xs text-blue-600 mt-1">
            Use this name in scripts: <code className="bg-white px-1 rounded">context.formData.{selectedField.name}</code>
          </p>
        </div>

        <div className="space-y-5">
          {/* Label */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Label
            </label>
            <Input
              value={selectedField.label}
              onChange={(e) => updateField(selectedField.id, { label: e.target.value })}
              placeholder="Field label"
            />
          </div>

          {/* Placeholder */}
          {!hasOptions && selectedField.type !== 'file' && selectedField.type !== 'rating' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Placeholder
              </label>
              <Input
                value={selectedField.placeholder || ''}
                onChange={(e) => updateField(selectedField.id, { placeholder: e.target.value })}
                placeholder="Placeholder text"
              />
            </div>
          )}

          {/* Required Toggle */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
            <label htmlFor="required" className="text-sm font-semibold text-gray-700 cursor-pointer">
              Required field
            </label>
            <input
              type="checkbox"
              id="required"
              checked={selectedField.required}
              onChange={(e) => updateField(selectedField.id, { required: e.target.checked })}
              className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            />
          </div>

          {/* Options for Select/Radio/Checkbox */}
          {hasOptions && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Options
              </label>
              <div className="space-y-2 mb-3">
                {selectedField.options?.map((option, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={option}
                      onChange={(e) => updateOption(index, e.target.value)}
                      placeholder={`Option ${index + 1}`}
                      className="flex-1"
                    />
                    <button
                      title='Remove option'
                      onClick={() => removeOption(index)}
                      className="p-2.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      disabled={selectedField.options!.length <= 1}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Input
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addOption()}
                  placeholder="Add new option"
                  className="flex-1"
                />
                <button
                  title='Add option'
                  onClick={addOption}
                  className="p-2.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Number Validation */}
          {selectedField.type === 'number' && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Minimum Value
                </label>
                <Input
                  type="number"
                  value={selectedField.validation?.min || ''}
                  onChange={(e) => updateField(selectedField.id, {
                    validation: { ...selectedField.validation, min: Number(e.target.value) }
                  })}
                  placeholder="Min value"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Maximum Value
                </label>
                <Input
                  type="number"
                  value={selectedField.validation?.max || ''}
                  onChange={(e) => updateField(selectedField.id, {
                    validation: { ...selectedField.validation, max: Number(e.target.value) }
                  })}
                  placeholder="Max value"
                />
              </div>
            </>
          )}

          {/* Text/Textarea Validation */}
          {(selectedField.type === 'text' || selectedField.type === 'textarea') && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Min Length
                </label>
                <Input
                  type="number"
                  value={selectedField.validation?.minLength || ''}
                  onChange={(e) => updateField(selectedField.id, {
                    validation: { ...selectedField.validation, minLength: Number(e.target.value) }
                  })}
                  placeholder="Min characters"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Max Length
                </label>
                <Input
                  type="number"
                  value={selectedField.validation?.maxLength || ''}
                  onChange={(e) => updateField(selectedField.id, {
                    validation: { ...selectedField.validation, maxLength: Number(e.target.value) }
                  })}
                  placeholder="Max characters"
                />
              </div>
            </>
          )}

          {/* Textarea Rows */}
          {selectedField.type === 'textarea' && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Number of Rows
              </label>
              <Input
                type="number"
                min="2"
                max="20"
                value={selectedField.validation?.rows || 4}
                onChange={(e) => updateField(selectedField.id, {
                  validation: { ...selectedField.validation, rows: Number(e.target.value) }
                })}
              />
            </div>
          )}

          {/* File Upload Settings */}
          {selectedField.type === 'file' && (
            <>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Max File Size (MB)
                </label>
                <Input
                  type="number"
                  value={selectedField.validation?.maxSize || ''}
                  onChange={(e) => updateField(selectedField.id, {
                    validation: { ...selectedField.validation, maxSize: Number(e.target.value) }
                  })}
                  placeholder="e.g. 5"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Allowed File Types
                </label>
                <Input
                  value={selectedField.validation?.fileTypes?.join(', ') || ''}
                  onChange={(e) => updateField(selectedField.id, {
                    validation: { 
                      ...selectedField.validation, 
                      fileTypes: e.target.value.split(',').map(t => t.trim()).filter(Boolean)
                    }
                  })}
                  placeholder="e.g. pdf, jpg, png"
                />
                <p className="text-xs text-gray-500 mt-1">Comma-separated</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}