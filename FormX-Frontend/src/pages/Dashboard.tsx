import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, FileText, Eye, Trash2, Copy, ExternalLink, User, LogOut, CodeXml, Settings } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Skeleton } from '../components/ui/Skeleton';
import { formService, type FormResultType } from '../services/formService';
import { useAuthStore } from '../stores/authStore';
import { toast } from 'sonner';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [forms, setForms] = useState<FormResultType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadForms();
  }, []);

  const loadForms = async () => {
    try {
      const userForms = await formService.getMyForms();
      setForms(Array.isArray(userForms) ? userForms : []);
    } catch (error) {
      toast.error((error as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Failed to load forms');
      console.error('Error loading forms:', error);
      setForms([]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      logout();
      toast.success('Logged out successfully!');
      navigate('/login');
    }
  };

  const handleDelete = async (formId: string, formTitle: string) => {
    if (!confirm(`Are you sure you want to delete "${formTitle}"?`)) {
      return;
    }

    try {
      await formService.deleteForm(formId);
      setForms(forms.filter(f => f.id !== formId));
      toast.success('Form deleted successfully!');
    } catch (error) {
      toast.error((error as { response?: { data?: { message?: string } } })?.response?.data?.message || 'Failed to delete form');
      console.error('Error deleting form:', error);
    }
  };

  const handleCopyLink = (formId: string) => {
    const shareUrl = `${window.location.origin}/forms/fill/${formId}`;
    navigator.clipboard.writeText(shareUrl);
    toast.success('Form link copied to clipboard!');
  };

  const handleViewResponses = (formId: string) => {
    navigate(`/forms/${formId}/responses`);
  };

  const getFieldCount = (form: FormResultType): number => {
    try {
      const schema = typeof form.schema === 'string'
        ? JSON.parse(form.schema) 
        : form.schema;
      
      // Handle both array format and {fields: []} format
      if (Array.isArray(schema)) {
        return schema.length;
      }
      if (schema && typeof schema === 'object' && 'fields' in schema && Array.isArray(schema.fields)) {
        return schema.fields.length;
      }
      return 0;
    } catch {
      return 0;
    }
  };

  const getResponseCount = (form: FormResultType): number => {
    // Use _count from the API response instead of making async calls
    return (form as { _count?: { submissions?: number } })?._count?.submissions ?? 0;
  };


  return (
     <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Forms</h1>
              <p className="text-gray-600 mt-1">
                Welcome back, {user?.name || 'User'}!
              </p>
            </div>
            <div className="flex items-center gap-3">
               <Button variant="outline" onClick={() => navigate('/scripts')}>
                <CodeXml className="w-4 h-4 mr-2" />
                Scripts
              </Button>
              <Button variant="outline" onClick={() => navigate('/profile')}>
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
              <Button variant="outline" onClick={() => navigate('/settings')}>
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
              <Button onClick={() => navigate('/forms/new')}>
                <Plus className="w-5 h-5 mr-2" />
                Create New Form
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true" aria-label="Loading your forms">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-200 p-6">
                <Skeleton className="h-5 w-3/4 mb-3" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-2/3 mb-4" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <div className="flex gap-2">
                  <Skeleton className="h-9 flex-1" />
                  <Skeleton className="h-9 w-9" />
                  <Skeleton className="h-9 w-9" />
                </div>
              </div>
            ))}
          </div>
        ) : forms.length === 0 ? (
          <div className="text-center py-16">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No forms yet</h3>
            <p className="text-gray-500 mb-6">Get started by creating your first form</p>
            <Button onClick={() => navigate('/forms/new')}>
              <Plus className="w-5 h-5 mr-2" />
              Create Your First Form
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forms.map((form) => (
              <div
                key={form.id}
                className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {form.title}
                    </h3>
                    {form.description && (
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {form.description}
                      </p>
                    )}
                  </div>
                  {form.isPublic && (
                    <span className="ml-2 px-2 py-1 text-xs font-medium bg-green-100 text-green-700 rounded-full">
                      Published
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span>{getFieldCount(form)} fields</span>
                  <span>•</span>
                  <span>{getResponseCount(form)} responses</span>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigate(`/forms/edit/${form.id}`)}
                    className="flex-1"
                  >
                    Edit
                  </Button>
                  {form.isPublic && (
                    <>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleViewResponses(form.id)}
                        title="View Responses"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleCopyLink(form.id)}
                        title="Copy Link"
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(`/forms/fill/${form.id}`, '_blank')}
                        title="Open Form"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(form.id, form.title)}
                    title="Delete Form"
                    className="!text-red-600 hover:!bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}