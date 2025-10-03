import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { scriptService, type Script } from '../../services/scriptService';
import { Button } from '../../components/ui/Button';
import { toast } from 'sonner';
import { PlusIcon, TrashIcon, CodeXml, Info, ExternalLink, Sparkles } from 'lucide-react';
import AIAssistant from '../../components/ai/AIAssistant';
import { Skeleton } from '../../components/ui/Skeleton';

export default function ScriptsList() {
  const navigate = useNavigate();
  const [scripts, setScripts] = useState<Script[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAI, setShowAI] = useState(false);

  useEffect(() => {
    loadScripts();
  }, []);

  async function loadScripts() {
    try {
      const data = await scriptService.getMyScripts();
      setScripts(data);
    } catch {
      toast.error('Failed to load scripts');
    } finally {
      setLoading(false);
    }
  }

  async function deleteScript(id: string) {
    if (!confirm('Delete this script? This will detach it from all forms.')) return;

    try {
      await scriptService.deleteScript(id);
      toast.success('Script deleted');
      loadScripts();
    } catch {
      toast.error('Failed to delete script');
    }
  }

  async function handleAIGenerated(code: string, name: string, description: string) {
    try {
      await scriptService.createScript({ name, code, description });
      toast.success('✅ Script created from AI!');
      setShowAI(false);
      loadScripts();
    } catch (error) {
      const message = (error as { response?: { data?: { message?: string } } }).response?.data?.message || 'Failed to save script';
      toast.error(message);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <CodeXml className="w-8 h-8 text-blue-600" />
              Scripts
            </h1>
            <p className="text-gray-600 mt-2">
              Manage validation, transformation, and automation scripts
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              onClick={() => setShowAI(true)}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              <Sparkles className="w-5 h-5" />
              AI Generate
            </Button>
            <Button
              onClick={() => navigate('/scripts/new')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              <PlusIcon className="w-5 h-5" />
              New Script
            </Button>
          </div>
        </div>

        {/* Info Banner */}
        {!loading && scripts.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-900">
                <p className="font-semibold mb-1">Next Steps:</p>
                <p>
                  Go to{' '}
                  <button
                    onClick={() => navigate('/dashboard')}
                    className="underline hover:text-blue-700 font-medium"
                  >
                    Forms
                  </button>{' '}
                  → Select a form → Settings → Attach Script to start using your scripts
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Loading skeleton */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" aria-busy="true" aria-label="Loading scripts">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <Skeleton className="h-5 w-2/3 mb-4" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-20 w-full mb-4" />
                <Skeleton className="h-3 w-1/3" />
              </div>
            ))}
          </div>
        ) : scripts.length === 0 ? (
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="text-center py-16 px-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <CodeXml className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No scripts yet</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Create your first script to add custom validation, data transformation, or automation logic to your forms
              </p>
              <div className="flex justify-center gap-3">
                <Button
                  onClick={() => setShowAI(true)}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors"
                >
                  <Sparkles className="w-5 h-5" />
                  Generate with AI
                </Button>
                <Button
                  onClick={() => navigate('/scripts/new')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2 transition-colors"
                >
                  <PlusIcon className="w-5 h-5" />
                  Create Manually
                </Button>
              </div>

              {/* Quick Examples */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">✅ Validation</h4>
                  <p className="text-xs text-gray-600">
                    Prevent duplicate emails, check whitelists, enforce business rules
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">🔄 Transformation</h4>
                  <p className="text-xs text-gray-600">
                    Auto-fill fields, format data, calculate values
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">📊 Cross-Reference</h4>
                  <p className="text-xs text-gray-600">
                    Query other forms and sheets, validate against external data
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Scripts Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scripts.map((script) => (
              <div
                key={script.id}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-lg text-gray-900 flex-1 pr-2">
                      {script.name}
                    </h3>
                    <button
                      title="Delete script"
                      onClick={() => deleteScript(script.id)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1.5 rounded transition-colors flex-shrink-0"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>

                  {script.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{script.description}</p>
                  )}

                  <div className="bg-gray-900 rounded-lg p-3 mb-4 overflow-hidden">
                    <code className="text-xs text-green-400 font-mono block overflow-hidden">
                      <div className="line-clamp-3">{script.code}</div>
                    </code>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Created {new Date(script.createdAt).toLocaleDateString()}</span>
                    <button
                      onClick={() => navigate(`/scripts/${script.id}`)}
                      className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
                    >
                      View
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showAI && (
        <AIAssistant
          onCodeGenerated={handleAIGenerated}
          onClose={() => setShowAI(false)}
        />
      )}
    </div>
  );
}