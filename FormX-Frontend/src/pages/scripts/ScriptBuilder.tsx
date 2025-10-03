import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import { scriptService } from '../../services/scriptService';
import { Button } from '../../components/ui/Button';
import { toast } from 'sonner';
import { Info, Lightbulb, Code2, Sparkles, ArrowLeft, Loader2 } from 'lucide-react';
import { aiService } from '../../services/aiService';


interface Template {
  id: string;
  name: string;
  code: string;
  description: string;
  event: string;
}

export default function ScriptBuilder() {
  const navigate = useNavigate();
  const { id: scriptId } = useParams<{ id: string }>();
  const isEditMode = !!scriptId;
  
  const [templates, setTemplates] = useState<Template[]>([]);
  const [templatesLoading, setTemplatesLoading] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [code, setCode] = useState('// Your script here\n\nreturn true;');
  const [loading, setLoading] = useState(false);
  const [loadingScript, setLoadingScript] = useState(false);
  
  // AI State
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiLoading, setAiLoading] = useState(false);

  // Help panel state
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    loadTemplates();
    if (scriptId) {
      loadScript(scriptId);
    }
  }, [scriptId]);

  async function loadScript(id: string) {
    setLoadingScript(true);
    try {
      const script = await scriptService.getScript(id);
      setName(script.name);
      setDescription(script.description || '');
      setCode(script.code);
    } catch (error) {
      toast.error('Failed to load script');
      console.error('Error loading script:', error);
    } finally {
      setLoadingScript(false);
    }
  }

  async function loadTemplates() {
    setTemplatesLoading(true);
    try {
      const data = await scriptService.getTemplates();
      setTemplates(data);
    } catch {
      toast.error('Failed to load templates');
    } finally {
      setTemplatesLoading(false);
    }
  }

  function selectTemplate(template: Template) {
    setSelectedTemplate(template);
    setName(template.name);
    setDescription(template.description);
    setCode(template.code);
  }

  async function generateWithAI() {
    if (!aiPrompt.trim()) {
      toast.error('Please describe what you want the script to do');
      return;
    }

    setAiLoading(true);
    try {
      const result = await aiService.generateScript({
        prompt: aiPrompt,
      });

      setCode(result.code);
      setName(result.name);
      setDescription(result.description);
      toast.success('✨ AI-generated code inserted!');
      setAiPrompt('');
    } catch (error: unknown) {
      console.error('AI generation failed:', error);
      const message = error instanceof Error && 'response' in error
        ? (error as { response?: { data?: { message?: string } } }).response?.data?.message || 'Failed to create script'
        : 'Failed to create script';
      toast.error(message);
    } finally {
      setAiLoading(false);
    }
  }

  async function saveScript() {
    if (!name.trim()) {
      toast.error('Script name required');
      return;
    }

    setLoading(true);
    try {
      if (isEditMode && scriptId) {
        await scriptService.updateScript(scriptId, {
          name,
          code,
          description,
        });
        toast.success('Script updated successfully!');
      } else {
        await scriptService.createScript({
          name,
          code,
          description,
        });
        toast.success('Script created successfully!');
      }
      navigate('/scripts');
    } catch (error: unknown) {
      const message = error instanceof Error && 'response' in error 
        ? (error as { response?: { data?: { message?: string } } }).response?.data?.message || 'Failed to save script'
        : 'Failed to save script';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  }

  if (loadingScript) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1800px] mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => navigate('/scripts')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Scripts
          </Button>
          
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <Code2 className="w-8 h-8 text-blue-600" />
            Script Builder
          </h1>
          <p className="text-gray-600 mt-2">
            Create custom validation, transformation, or automation scripts for your forms
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="text-sm text-blue-900">
              <p className="font-semibold mb-1">How to use scripts:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Use templates, AI assistant, or write code manually</li>
                <li>Save your script</li>
                <li>Go to Forms → Select a form → Settings → Attach Script</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar - Templates */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-4">
              <div className="flex items-center gap-2 mb-4">
                <Code2 className="w-5 h-5 text-blue-600" />
                <h2 className="text-lg font-semibold text-gray-900">Templates</h2>
              </div>

              {templatesLoading ? (
                <p className="text-sm text-gray-500">Loading templates...</p>
              ) : templates.length === 0 ? (
                <p className="text-sm text-gray-500">No templates available.</p>
              ) : (
                <div className="space-y-3">
                  {templates.map((t) => (
                    <div
                      key={t.id}
                      onClick={() => selectTemplate(t)}
                      className={`p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                        selectedTemplate?.id === t.id
                          ? 'border-blue-500 bg-blue-50 shadow-sm'
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      <h3 className="font-semibold text-sm text-gray-900">{t.name}</h3>
                      <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                        {t.description}
                      </p>
                      <span className="inline-block mt-3 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        {t.event}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Collapsible Script Help */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => setShowHelp(!showHelp)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    <h3 className="font-semibold text-sm text-gray-900">📖 Script Help & Examples</h3>
                  </div>
                  <span className="text-gray-400 text-sm">{showHelp ? '▼' : '▶'}</span>
                </button>

                {showHelp && (
                  <div className="mt-4 space-y-4 text-xs">
                    {/* Context Variables */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">📦 Available Context Variables</h4>
                      <div className="space-y-2">
                        <div className="bg-gray-50 rounded p-2">
                          <code className="text-purple-600">context.formData</code>
                          <p className="text-gray-600 mt-1">Current submission data (keyed by field name)</p>
                        </div>
                        <div className="bg-gray-50 rounded p-2">
                          <code className="text-purple-600">context.existingSubmissions</code>
                          <p className="text-gray-600 mt-1">Previous submissions array [{'{'}id, data, createdAt{'}'}]</p>
                        </div>
                        <div className="bg-gray-50 rounded p-2">
                          <code className="text-purple-600">context.formId</code>
                          <p className="text-gray-600 mt-1">Current form ID</p>
                        </div>
                        <div className="bg-gray-50 rounded p-2">
                          <code className="text-purple-600">context.userId</code>
                          <p className="text-gray-600 mt-1">Submitting user ID (if authenticated)</p>
                        </div>
                      </div>
                    </div>

                    {/* Example: Duplicate Prevention */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">🚫 Example: Prevent Duplicates</h4>
                      <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto">{`const name = context.formData.full_name;
const existing = context.existingSubmissions || [];

const duplicate = existing.find(
  sub => sub.data.full_name?.toLowerCase() === name?.toLowerCase()
);

if (duplicate) {
  throw new Error('This name already exists.');
}`}</pre>
                    </div>

                    {/* Example: Email Validation */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">📧 Example: Email Validation</h4>
                      <pre className="bg-gray-900 text-green-400 p-3 rounded text-xs overflow-x-auto">{`const email = context.formData.email;

if (email && !email.endsWith('@company.com')) {
  throw new Error('Only company emails allowed.');
}`}</pre>
                    </div>

                    {/* Utilities */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">🔧 Utility Functions</h4>
                      <div className="space-y-2">
                        <div className="bg-gray-50 rounded p-2">
                          <code className="text-purple-600">utils.validateEmail(email)</code>
                          <p className="text-gray-600 mt-1">Returns true if valid email</p>
                        </div>
                        <div className="bg-gray-50 rounded p-2">
                          <code className="text-purple-600">utils.validatePhone(phone)</code>
                          <p className="text-gray-600 mt-1">Returns true if valid phone</p>
                        </div>
                        <div className="bg-gray-50 rounded p-2">
                          <code className="text-purple-600">utils.validateUrl(url)</code>
                          <p className="text-gray-600 mt-1">Returns true if valid URL</p>
                        </div>
                      </div>
                    </div>

                    {/* Tips */}
                    <div className="bg-amber-50 border border-amber-200 rounded p-3">
                      <h4 className="font-semibold text-amber-800 mb-1">💡 Tips</h4>
                      <ul className="text-amber-700 space-y-1">
                        <li>• Use <code>throw new Error('message')</code> to block submission</li>
                        <li>• Field names are shown in Form Builder → Field Settings</li>
                        <li>• Attach scripts in Form Settings → Scripts tab</li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Center - Editor */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Script Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g., Email Duplicate Check"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border text-black border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Brief description of what this script does"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Script Code *
                </label>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <Editor
                    height="500px"
                    defaultLanguage="javascript"
                    value={code}
                    onChange={(value) => setCode(value || '')}
                    theme="vs-dark"
                    options={{
                      minimap: { enabled: false },
                      fontSize: 14,
                      lineNumbers: 'on',
                      scrollBeyondLastLine: false,
                      automaticLayout: true,
                      padding: { top: 16, bottom: 16 },
                    }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  💡 Tip: Use <code className="bg-gray-100 px-1 rounded">throw new Error()</code> to reject submissions
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={saveScript}
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    'Save Script'
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/scripts')}
                  disabled={loading}
                  className="border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>

          {/* Right Sidebar - AI Assistant */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg shadow-sm border border-purple-200 p-6 sticky top-4">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h2 className="text-lg font-semibold text-gray-900">AI Assistant</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Describe what you want and let AI generate the code for you
              </p>

              {/* Prompt Input */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  What should your script do?
                </label>
                <textarea
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  placeholder="Example: Check for duplicate emails and prevent submission"
                  className="w-full h-32 px-3 py-2 text-gray-600 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm"
                  disabled={aiLoading}
                />
              </div>

              {/* Generate Button */}
              <Button
                onClick={generateWithAI}
                disabled={aiLoading || !aiPrompt.trim()}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed mb-4"
              >
                {aiLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate with AI
                  </>
                )}
              </Button>

              {/* Quick Suggestions */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-700 mb-2">💡 Try these:</p>
                {[
                  'Check for duplicate email addresses',
                  'Validate against approved whitelist',
                  'Limit submissions to 100 entries',
                  'Auto-calculate total from quantity × price',
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setAiPrompt(suggestion)}
                    disabled={aiLoading}
                    className="block w-full text-left text-xs px-3 py-2 bg-white hover:bg-purple-50 border border-purple-200 rounded-lg transition-colors disabled:opacity-50"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>

              {/* Info */}
              <div className="mt-4 pt-4 border-t border-purple-200">
                <p className="text-xs text-gray-600">
                  <span className="font-semibold">✨ Powered by Google Gemini</span>
                  <br />
                  AI will analyze your request and generate optimized JavaScript code
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}