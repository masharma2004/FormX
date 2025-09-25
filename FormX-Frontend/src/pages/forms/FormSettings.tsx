import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  scriptService,
  type AttachScriptDto,
  type Script,
} from '../../services/scriptService';
import { formService } from '../../services/formService';
import { Button } from '../../components/ui/Button';
import { toast } from 'sonner';
import {
  Link2,
  Unlink,
  Shield,
  Users,
  Mail,
  CheckCircle,
  Play,
  Loader2,
  Plus,
} from 'lucide-react';

interface FormScript {
  id: string;
  scriptId: string;
  formId: string;
  event: string;
  order: number;
  enabled: boolean;
  script: Script;
}

interface FormSettings {
  requireAuth?: boolean;
  allowAnonymous?: boolean;
  collectEmail?: boolean;
  oneResponsePerUser?: boolean;
}

export default function FormSettings() {
  const { id: formId } = useParams();
  const navigate = useNavigate();
  const [scripts, setScripts] = useState<Script[]>([]);
  const [attachedScripts, setAttachedScripts] = useState<FormScript[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAttachModal, setShowAttachModal] = useState(false);
  const [testingScript, setTestingScript] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<Record<string, { success: boolean; result?: unknown; error?: string; executionTime?: number }>>({});

  // NEW: Auth settings state
  const [authSettings, setAuthSettings] = useState<FormSettings>({
    requireAuth: false,
    allowAnonymous: true,
    collectEmail: false,
    oneResponsePerUser: false,
  });
  const [savingSettings, setSavingSettings] = useState(false);

  useEffect(() => {
    if (formId) {
      loadData();
    }
  }, [formId]);

  async function loadData() {
    if (!formId) return;

    try {
      const [allScripts, formScripts, form] = await Promise.all([
        scriptService.getMyScripts(),
        scriptService.getFormScripts(formId),
        formService.getFormById(formId),
      ]);
      setScripts(allScripts);
      setAttachedScripts(formScripts as FormScript[]);

      // Load existing auth settings
      if (form.settings) {
        const settings = form.settings as FormSettings;
        setAuthSettings({
          requireAuth: settings.requireAuth || false,
          allowAnonymous: settings.allowAnonymous !== false,
          collectEmail: settings.collectEmail || false,
          oneResponsePerUser: settings.oneResponsePerUser || false,
        });
      }
    } catch (error) {
      console.error('Failed to load data:', error);
      toast.error('Failed to load form settings');
    } finally {
      setLoading(false);
    }
  }

  // NEW: Save auth settings
  async function saveAuthSettings() {
    if (!formId) return;

    setSavingSettings(true);
    try {
      await formService.updateForm(formId, {
        settings: authSettings,
      });
      toast.success('✅ Settings saved successfully!');
    } catch (error) {
      console.error('Failed to save settings:', error);
      toast.error('Failed to save settings');
    } finally {
      setSavingSettings(false);
    }
  }

  async function attachScript(
    scriptId: string,
    event: AttachScriptDto['event']
  ) {
    if (!formId) return;

    try {
      await scriptService.attachToForm({
        scriptId,
        formId,
        event,
        order: 0,
      });
      toast.success('✅ Script attached successfully!');
      setShowAttachModal(false);
      await loadData();
    } catch (error) {
      console.error('Failed to attach script:', error);
      toast.error('Failed to attach script');
    }
  }

  async function detachScript(scriptId: string, event: string) {
    if (!formId) return;
    if (!confirm('Detach this script from the form?')) return;

    try {
      await scriptService.detachFromForm(scriptId, formId, event);
      toast.success('Script detached');
      await loadData();
    } catch (error) {
      console.error('Failed to detach script:', error);
      toast.error('Failed to detach script');
    }
  }

  async function testScript(scriptId: string) {
    setTestingScript(scriptId);
    try {
      const result = await scriptService.testScript(scriptId, {
        formId,
        event: 'test',
        formData: { email: 'test@example.com', name: 'Test User' },
      });
      setTestResults(prev => ({ ...prev, [scriptId]: result as { success: boolean; result?: unknown; error?: string; executionTime?: number } }));
      if ((result as { success: boolean }).success) {
        toast.success('✅ Script executed successfully!');
      } else {
        toast.error(`Script failed: ${(result as { error?: string }).error}`);
      }
    } catch (error) {
      console.error('Failed to test script:', error);
      toast.error('Failed to test script');
      setTestResults(prev => ({ ...prev, [scriptId]: { success: false, error: 'Test failed' } }));
    } finally {
      setTestingScript(null);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  const availableScripts = scripts.filter(
    (s) => !attachedScripts.some((as) => as.scriptId === s.id)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(`/forms/${formId}/edit`)}
          className="mb-4 text-gray-600 hover:text-gray-900"
        >
          ← Back to Form
        </Button>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Form Settings</h2>

        {/* NEW: Authentication Settings Section */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-purple-600" />
            <h3 className="font-semibold text-gray-900">
              Authentication Settings
            </h3>
          </div>

          <div className="space-y-4">
            <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input
                type="checkbox"
                checked={authSettings.requireAuth}
                onChange={(e) =>
                  setAuthSettings({
                    ...authSettings,
                    requireAuth: e.target.checked,
                    allowAnonymous: !e.target.checked,
                  })
                }
                className="mt-1"
              />
              <div className="flex-1">
                <div className="font-medium text-gray-900 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-600" />
                  Require Authentication
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Users must be logged in to submit this form
                </p>
              </div>
            </label>

            <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input
                type="checkbox"
                checked={authSettings.allowAnonymous}
                onChange={(e) =>
                  setAuthSettings({
                    ...authSettings,
                    allowAnonymous: e.target.checked,
                  })
                }
                disabled={authSettings.requireAuth}
                className="mt-1"
              />
              <div className="flex-1">
                <div className="font-medium text-gray-900 flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  Allow Anonymous Submissions
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Users can submit without logging in
                </p>
                {authSettings.requireAuth && (
                  <p className="text-xs text-amber-600 mt-1">
                    ⚠️ Disabled because authentication is required
                  </p>
                )}
              </div>
            </label>

            <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input
                type="checkbox"
                checked={authSettings.collectEmail}
                onChange={(e) =>
                  setAuthSettings({
                    ...authSettings,
                    collectEmail: e.target.checked,
                  })
                }
                className="mt-1"
              />
              <div className="flex-1">
                <div className="font-medium text-gray-900 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-green-600" />
                  Collect Email Address
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Require email from anonymous users
                </p>
              </div>
            </label>

            <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
              <input
                type="checkbox"
                checked={authSettings.oneResponsePerUser}
                onChange={(e) =>
                  setAuthSettings({
                    ...authSettings,
                    oneResponsePerUser: e.target.checked,
                  })
                }
                className="mt-1"
              />
              <div className="flex-1">
                <div className="font-medium text-gray-900 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-indigo-600" />
                  One Response Per User
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Limit each user to a single submission
                </p>
              </div>
            </label>
          </div>

          <div className="mt-6 flex justify-end">
            <Button
              onClick={saveAuthSettings}
              disabled={savingSettings}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {savingSettings
                ? 'Saving...'
                : 'Save Authentication Settings'}
            </Button>
          </div>
        </div>

        {/* Attached Scripts */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Attached Scripts</h3>
            <div className="flex gap-2">
              <Button
                onClick={() => navigate('/scripts/new')}
                variant="outline"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Script
              </Button>
              <Button
                onClick={() => setShowAttachModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Link2 className="w-4 h-4 mr-2" />
                Attach Script
              </Button>
            </div>
          </div>

          {attachedScripts.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm mb-4">
                No scripts attached to this form yet
              </p>
              <Button
                onClick={() => setShowAttachModal(true)}
                variant="outline"
              >
                Attach Your First Script
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {attachedScripts.map((fs) => (
                <div key={fs.id} className="border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex items-center justify-between p-4">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">
                        {fs.script.name}
                      </p>
                      {fs.script.description && (
                        <p className="text-sm text-gray-600 mt-1">
                          {fs.script.description}
                        </p>
                      )}
                      <div className="flex items-center gap-3 mt-2">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            fs.event === 'validate'
                              ? 'bg-blue-100 text-blue-800'
                              : fs.event === 'beforeSubmit'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-purple-100 text-purple-800'
                          }`}
                        >
                          {fs.event}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            fs.enabled
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {fs.enabled ? 'Enabled' : 'Disabled'}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        title="Test script"
                        onClick={() => testScript(fs.scriptId)}
                        disabled={testingScript === fs.scriptId}
                        className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 p-2 rounded transition-colors disabled:opacity-50"
                      >
                        {testingScript === fs.scriptId ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <Play className="w-5 h-5" />
                        )}
                      </button>
                      <button
                        title="Detach script"
                        onClick={() => detachScript(fs.scriptId, fs.event)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded transition-colors"
                      >
                        <Unlink className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  {testResults[fs.scriptId] && (
                    <div className={`mx-4 mb-4 p-3 rounded-lg text-sm ${testResults[fs.scriptId].success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                      <div className="flex items-center gap-2">
                        <span className={testResults[fs.scriptId].success ? 'text-green-700' : 'text-red-700'}>
                          {testResults[fs.scriptId].success ? '✅ Success' : '❌ Failed'}
                        </span>
                        {testResults[fs.scriptId].executionTime && (
                          <span className="text-gray-500">({testResults[fs.scriptId].executionTime}ms)</span>
                        )}
                      </div>
                      {testResults[fs.scriptId].error && (
                        <p className="mt-1 text-red-600 font-mono text-xs">{testResults[fs.scriptId].error}</p>
                      )}
                      {!!testResults[fs.scriptId].result && (
                        <pre className="mt-1 text-gray-700 font-mono text-xs overflow-x-auto">
                          {JSON.stringify(testResults[fs.scriptId].result, null, 2)}
                        </pre>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Attach Modal */}
        {showAttachModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-hidden flex flex-col">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">
                  Attach Script to Form
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Select a script and choose when it should run
                </p>
              </div>

              <div className="p-6 overflow-y-auto flex-1">
                {availableScripts.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">
                      No available scripts. Create a script first!
                    </p>
                    <Button
                      onClick={() => {
                        setShowAttachModal(false);
                        window.location.href = '/scripts/new';
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Create Script
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {availableScripts.map((script) => (
                      <div
                        key={script.id}
                        className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                      >
                        <div className="mb-3">
                          <p className="font-semibold text-gray-900">
                            {script.name}
                          </p>
                          {script.description && (
                            <p className="text-sm text-gray-600 mt-1">
                              {script.description}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() => attachScript(script.id, 'validate')}
                            className="text-sm px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                          >
                            Run on Validate
                          </button>
                          <button
                            onClick={() =>
                              attachScript(script.id, 'beforeSubmit')
                            }
                            className="text-sm px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
                          >
                            Run Before Submit
                          </button>
                          <button
                            onClick={() =>
                              attachScript(script.id, 'afterSubmit')
                            }
                            className="text-sm px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors"
                          >
                            Run After Submit
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <Button
                  onClick={() => setShowAttachModal(false)}
                  variant="outline"
                  className="w-full"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}