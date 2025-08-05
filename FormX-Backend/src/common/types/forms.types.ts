export enum FieldType {
  TEXT = 'text',
  EMAIL = 'email',
  NUMBER = 'number',
  INTEGER = 'integer',
  DECIMAL = 'decimal',
  FLOAT = 'float',
  TEXTAREA = 'textarea',
  SELECT = 'select',
  RADIO = 'radio',
  MULTISELECT = 'multiselect',
  CHECKBOX = 'checkbox',
  DATE = 'date',
  DATETIME = 'datetime',
  BOOLEAN = 'boolean',
  URL = 'url',
  PHONE = 'phone',
  FILE = 'file',
}

export interface FieldOption {
  label: string;
  value: string;
}

export interface FieldValidation {
  min?: number;
  max?: number;
  pattern?: string;
  message?: string;
}

export interface FormField {
  id: string;
  name: string;
  type: FieldType;
  label: string;
  required?: boolean;
  options?: FieldOption[];
  validation?: FieldValidation;
  [key: string]: unknown;
}

export interface FormSchema {
  fields: FormField[];
  [key: string]: unknown;
}

export enum ScriptEvent {
  VALIDATE = 'validate',
  BEFORE_SUBMIT = 'beforeSubmit',
  AFTER_SUBMIT = 'afterSubmit',
}
