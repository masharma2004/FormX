import type { UseFormRegister, FieldErrors, UseFormSetValue, UseFormWatch, FieldValues } from 'react-hook-form';
import type { Field } from '../../lib/types';
import { useState } from 'react';

interface FieldRendererProps {
  field: Field;
  disabled?: boolean;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  setValue?: UseFormSetValue<FieldValues>;
  watch?: UseFormWatch<FieldValues>;

}

export default function FieldRenderer({ field, disabled = true, register, errors, setValue, watch }: FieldRendererProps) {
  const [rating, setRating] = useState(0);
  const baseInputClass = "w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:text-gray-600";
  const errorClass = errors?.[field.id] ? 'border-red-500' : '';
  
  const handleRatingClick = (value: number) => {
    // Always update local state for visual feedback
    setRating(value);
    // If form integration is available and not disabled, update form value too
    if (setValue && !disabled) {
      setValue(field.id, value);
    }
  };

  const handleCheckboxChange = (option: string, checked: boolean) => {
    if (!setValue || !watch) return;
    
    const currentValues = (watch(field.id) as string[]) || [];
    const newValues = checked
      ? [...currentValues, option]
      : currentValues.filter((v) => v !== option);
    
    setValue(field.id, newValues);
  };

  switch (field.type) {
    case 'text':
    case 'email':
    case 'url':
    case 'phone':
      return (
        <input
          type={field.type}
          placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`}
          className={`${baseInputClass} ${errorClass}`}
          disabled={disabled}
          {...(register ? register(field.id) : {})}
        />
      );

    case 'number':
      return (
        <input
          type="number"
          placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`}
          min={field.validation?.min}
          max={field.validation?.max}
          className={`${baseInputClass} ${errorClass}`}
          disabled={disabled}
          {...(register ? register(field.id) : {})}
        />
      );

    case 'date':
      return (
        <input
          aria-label={field.label}
          type="date"
          className={`${baseInputClass} ${errorClass}`}
          disabled={disabled}
          {...(register ? register(field.id) : {})}
        />
      );

    case 'textarea':
      return (
        <textarea
          placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`}
          rows={field.validation?.rows || 4}
           className={`${baseInputClass} ${errorClass}`}
          disabled={disabled}
          {...(register ? register(field.id) : {})}
        />
      );

    case 'select':
      return (
         <select 
          className={`${baseInputClass} ${errorClass}`}
          disabled={disabled}
          {...(register ? register(field.id) : {})}
        >
          <option value="">Select an option</option>
          {field.options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      );

    case 'radio':
      return (
        <div className="space-y-2">
          {field.options?.map((option, index) => (
            <label key={index} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                value={option}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                disabled={disabled}
                {...(register ? register(field.id) : {})}
              />
              <span className="text-sm text-gray-900">{option}</span>
            </label>
          ))}
        </div>
      );

    case 'checkbox':
      return (
        <div className="space-y-2">
            {field.options?.map((option, index) => {
            const currentValues = (watch?.(field.id) as string[]) || [];
            const isChecked = currentValues.includes(option);
            
            return (
              <label key={index} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  value={option}
                  checked={isChecked}
                  onChange={(e) => handleCheckboxChange(option, e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  disabled={disabled}
                />
              <span className="text-sm text-gray-900">{option}</span>
            </label>
            );
          })}
        </div>
      );

    case 'file':
      return (
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">
                {field.validation?.fileTypes?.join(', ') || 'Any file type'}
                {field.validation?.maxSize && ` (Max ${field.validation.maxSize}MB)`}
              </p>
            </div>
            <input 
              type="file" 
              className="hidden" 
              disabled={disabled}
              {...(register ? register(field.id) : {})}
            />
          </label>
        </div>
      );

    case 'rating':
      return (
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4, 5].map((value) => {
            const isFilled = value <= rating;
            return (
              <button
                title={`Rate ${value} star${value > 1 ? 's' : ''}`}
                key={value}
                type="button"
                onClick={() => handleRatingClick(value)}
                className="p-1 transition-all duration-150 transform cursor-pointer hover:scale-110 focus:outline-none focus:ring-0 outline-none border-none"
                style={{ outline: 'none', boxShadow: 'none' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                  fill={isFilled ? '#facc15' : 'none'}
                  stroke={isFilled ? '#facc15' : '#d1d5db'}
                  strokeWidth="2"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </button>
            );
          })}
          {rating > 0 && (
            <span className="ml-2 text-sm text-gray-600 font-medium">
              {rating}/5
            </span>
          )}
        </div>
      );

    default:
      return (
        <input
          type="text"
          placeholder={field.placeholder || `Enter ${field.label.toLowerCase()}`}
          className={`${baseInputClass} ${errorClass}`}
          disabled={disabled}
          {...(register ? register(field.id) : {})}
        />
      );
  }
}