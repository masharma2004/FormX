import { useState, useMemo, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  DndContext,
  type DragEndEvent,
  type DragStartEvent,
  DragOverlay,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  KeyboardSensor,
} from '@dnd-kit/core';
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Button } from '../../components/ui/Button';
import { toast } from 'sonner';
import FieldLibrary from '../../components/form-builder/FieldLibrary';
import FormCanvas from '../../components/form-builder/FormCanvas';
import FieldProperties from '../../components/form-builder/FieldProperties';
import type { FieldType, Field } from '../../lib/types';
import { formService } from '../../services/formService';
import { Loader2 } from 'lucide-react';

export default function FormBuilder() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [formTitle, setFormTitle] = useState('Untitled Form');
  const [formDescription, setFormDescription] = useState('');
  const [fields, setFields] = useState<Field[]>([]);
  const [selectedField, setSelectedField] = useState<Field | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isEditable, setIsEditable] = useState(true);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [isActive, setIsActive] = useState(false); // Track published status

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  useEffect(() => {
    if (id) {
      loadForm();
    }
  }, [id]);

  const loadForm = async () => {
    if (!id) return;
    
    setLoading(true);
    try {
      const form = await formService.getFormById(id);
      setFormTitle(form.title);
      setFormDescription(form.description || '');
      setIsPublic(form.isPublic);
      setIsActive(form.isActive); // Load active (published) status
      
      let schemaFields: Field[] = [];
      if (Array.isArray(form.schema)) {
        schemaFields = form.schema;
      } else if (form.schema && Array.isArray((form.schema as { fields?: Field[] }).fields)) {
        schemaFields = (form.schema as { fields: Field[] }).fields;
      }
      
      setFields(schemaFields);
    } catch (error) {
      toast.error((error as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Failed to load form');
      console.error('Error loading form:', error);
    } finally {
      setLoading(false);
    }
  };

  const addField = (type: FieldType) => {
    const fieldNumber = fields.length + 1;
    const fieldName = `field_${fieldNumber}`;
    const newField: Field = {
      id: `field_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`,
      name: fieldName,
      type,
      label: `${type.charAt(0).toUpperCase() + type.slice(1)} Field`,
      placeholder: '',
      required: false,
      options: ['select', 'radio', 'checkbox'].includes(type) ? ['Option 1', 'Option 2', 'Option 3'] : undefined,
      validation: {},
    };
    setFields(prevFields => [...prevFields, newField]);
    setSelectedField(newField);
    toast.success('Field added!');
  };

  const updateField = (fieldId: string, updates: Partial<Field>) => {
    setFields(fields.map((field) => {
      if (field.id === fieldId) {
        const updatedField = { ...field, ...updates };
        
        // ✅ Auto-generate name from label if label is being updated
        if (updates.label && !updates.name) {
          updatedField.name = updates.label
            .toLowerCase()
            .replace(/\s+/g, '_')
            .replace(/[^a-z0-9_]/g, ''); // Remove invalid characters
        }
        
        // Update selectedField if it's the one being modified
        if (selectedField?.id === fieldId) {
          setSelectedField(updatedField);
        }
        
        return updatedField;
      }
      return field;
    }));
  };

  const deleteField = (fieldId: string) => {
    setFields(fields.filter(f => f.id !== fieldId));
    if (selectedField?.id === fieldId) {
      setSelectedField(null);
    }
    toast.success('Field deleted!');
  };

  const duplicateField = (fieldId: string) => {
    const fieldToDuplicate = fields.find(f => f.id === fieldId);
    if (fieldToDuplicate) {
      const newId = `field_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
      const newName = `${fieldToDuplicate.name}_copy`;
      const newField = {
        ...fieldToDuplicate,
        id: newId,
        name: newName,
        label: `${fieldToDuplicate.label} (Copy)`,
      };
      setFields([...fields, newField]);
      toast.success('Field duplicated!');
    }
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.data.current?.type === 'NEW_FIELD') {
      const fieldType = active.data.current.fieldType as FieldType;
      addField(fieldType);
      setActiveId(null);
      return;
    }

    if (over && active.id !== over.id) {
      setFields((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
      toast.success('Field reordered!');
    }

    setActiveId(null);
  };

  const saveForm = async (publish: boolean = false) => {
    if (!formTitle.trim()) {
      toast.error('Please enter a form title');
      return;
    }

    if (fields.length === 0) {
      toast.error('Please add at least one field');
      return;
    }

    setSaving(true);
    try {
      const formData = {
        title: formTitle,
        description: formDescription,
        schema: { fields: fields, },
        // Only set isActive=true when publishing, otherwise preserve current state
        isActive: publish ? true : isActive,
        isPublic: publish ? true : isPublic,
      };

      console.log('📤 Sending form data:', JSON.stringify(formData, null, 2));

      let savedForm;
      if (id) {
        savedForm = await formService.updateForm(id, formData);
        toast.success(publish ? '✅ Form published!' : '✅ Form saved!');
        if (publish) {
          setIsActive(true);
          setIsPublic(true);
        }
      } else {
        savedForm = await formService.createForm(formData);
        toast.success(publish ? '✅ Form created and published!' : '✅ Form created!');
        if (publish) {
          setIsActive(true);
        }
        navigate(`/forms/edit/${savedForm.id}`, { replace: true });
      }

       if (publish) {
      toast.info('📊 Creating database table in background...');
      }
    } catch (error) {
      toast.error((error as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Failed to save form');
      console.error('Error saving form:', error);
    } finally {
      setSaving(false);
    }
  };

  const handlePublish = async () => {
    await saveForm(true);
    if (id) {
      const shareUrl = `${window.location.origin}/forms/fill/${id}`;
      navigator.clipboard.writeText(shareUrl);
      toast.success('Form published! Link copied to clipboard.');
    }
  };

  const activeField = useMemo(
    () => fields.find(f => f.id === activeId),
    [fields, activeId]
  );

  const activeDragItem = useMemo(() => {
    if (!activeId) return null;
    
    if (activeId.startsWith('new-')) {
      const fieldType = activeId.replace('new-', '') as FieldType;
      return {
        type: 'NEW_FIELD',
        label: `${fieldType.charAt(0).toUpperCase() + fieldType.slice(1)} Field`,
      };
    }
    
    return activeField;
  }, [activeId, activeField]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading form...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-gray-50 overflow-hidden">
      {/* Header */}
      <header className="flex-shrink-0 bg-white border-b border-gray-200 w-full">
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate('/dashboard')}
              >
                ← Back
              </Button>
              <div className="flex flex-col">
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="text-2xl font-bold text-gray-900 bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded px-3 py-1.5"
                  placeholder="Form Title"
                />
                <div className="flex items-center gap-2 px-3 mt-1">
                  <span className="text-xs text-gray-500">
                    {fields.length} {fields.length === 1 ? 'field' : 'fields'}
                  </span>
                  {isActive ? (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                      Published
                    </span>
                  ) : (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                      Draft
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => setIsEditable(prev => !prev)}
              >
                {isEditable ? '👁️ Preview' : '✏️ Edit'}
              </Button>
              <Button 
                variant="outline" 
                onClick={() => saveForm(false)}
                disabled={saving}
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Saving...
                  </>
                ) : (
                  '💾 Save Draft'
                )}
              </Button>
              <Button 
                variant="primary" 
                onClick={handlePublish}
                disabled={saving}
              >
                {saving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Publishing...
                  </>
                ) : (
                  '🚀 Publish'
                )}
              </Button>
              {id && (
                <>
                  <div className="h-8 w-px bg-gray-300 mx-2" />
                  <Button
                    variant="outline"
                    onClick={() => navigate(`/forms/${id}/responses`)}
                  >
                    📊 Responses
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => navigate(`/forms/${id}/settings`)}
                  >
                    ⚙️ Settings
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      const shareUrl = `${window.location.origin}/forms/fill/${id}`;
                      navigator.clipboard.writeText(shareUrl);
                      toast.success('Share link copied to clipboard!');
                    }}
                  >
                    🔗 Share
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex flex-1 w-full overflow-hidden">
          <div className="w-72 flex-shrink-0 bg-white border-r border-gray-200 overflow-y-auto">
            <FieldLibrary onAddField={addField} />
          </div>

          <div className="flex-1 overflow-y-auto bg-gray-50">
            <FormCanvas
              formTitle={formTitle}
              formDescription={formDescription}
              setFormDescription={setFormDescription}
              fields={fields}
              selectedField={selectedField}
              setSelectedField={setSelectedField}
              deleteField={deleteField}
              duplicateField={duplicateField}
              isEditable={isEditable}
            />
          </div>

          <div className="w-96 flex-shrink-0 bg-white border-l border-gray-200 overflow-y-auto">
            <FieldProperties
              selectedField={selectedField}
              updateField={updateField}
            />
          </div>
        </div>

        <DragOverlay>
          {activeDragItem ? (
            <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-blue-500 opacity-90">
              <div className="text-sm font-medium text-gray-700">
                {activeDragItem.type === 'NEW_FIELD' ? activeDragItem.label : (activeDragItem as Field).label}
              </div>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}