import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { toast } from 'sonner';
import { ArrowLeft, Database, CheckCircle, XCircle, Loader2, Link2 } from 'lucide-react';
import api from '../lib/api';

interface NocoDBSettings {
  url: string;
  token: string;
  projectId: string;
  isConfigured: boolean;
}

export default function Settings() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [testing, setTesting] = useState(false);
  
  const [nocodbSettings, setNocodbSettings] = useState<NocoDBSettings>({
    url: 'https://app.nocodb.com',
    token: '',
    projectId: '',
    isConfigured: false,
  });
  
  const [connectionStatus, setConnectionStatus] = useState<'unknown' | 'connected' | 'error'>('unknown');

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const response = await api.get('/users/settings');
      if (response.data.nocodb) {
        setNocodbSettings({
          ...response.data.nocodb,
          isConfigured: !!response.data.nocodb.token,
        });
        if (response.data.nocodb.token) {
          setConnectionStatus('connected');
        }
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const testConnection = async () => {
    if (!nocodbSettings.token || !nocodbSettings.projectId) {
      toast.error('Please enter token and project ID first');
      return;
    }

    setTesting(true);
    try {
      const response = await api.post('/users/settings/nocodb/test', {
        url: nocodbSettings.url,
        token: nocodbSettings.token,
        projectId: nocodbSettings.projectId,
      });
      
      if (response.data.success) {
        setConnectionStatus('connected');
        toast.success('Connection successful!');
      } else {
        setConnectionStatus('error');
        toast.error(response.data.error || 'Connection failed');
      }
    } catch {
      setConnectionStatus('error');
      toast.error('Connection test failed');
    } finally {
      setTesting(false);
    }
  };

  const saveSettings = async () => {
    setSaving(true);
    try {
      await api.put('/users/settings', {
        nocodb: {
          url: nocodbSettings.url,
          token: nocodbSettings.token,
          projectId: nocodbSettings.projectId,
        },
      });
      toast.success('Settings saved successfully!');
    } catch {
      toast.error('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  const clearSettings = async () => {
    if (!confirm('Are you sure you want to disconnect NocoDB?')) return;
    
    setSaving(true);
    try {
      await api.put('/users/settings', {
        nocodb: { url: '', token: '', projectId: '' },
      });
      setNocodbSettings({
        url: 'https://app.nocodb.com',
        token: '',
        projectId: '',
        isConfigured: false,
      });
      setConnectionStatus('unknown');
      toast.success('NocoDB disconnected');
    } catch {
      toast.error('Failed to clear settings');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => navigate('/dashboard')}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* NocoDB Integration */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 px-6 py-4">
            <div className="flex items-center gap-3">
              <Database className="w-8 h-8 text-white" />
              <div className="text-white">
                <h2 className="text-xl font-bold">NocoDB Integration</h2>
                <p className="text-green-100 text-sm">Sync form submissions to a spreadsheet-like database</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            {/* Status Indicator */}
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Status:</span>
              {connectionStatus === 'connected' && (
                <span className="flex items-center gap-1 text-green-600 text-sm">
                  <CheckCircle className="w-4 h-4" /> Connected
                </span>
              )}
              {connectionStatus === 'error' && (
                <span className="flex items-center gap-1 text-red-600 text-sm">
                  <XCircle className="w-4 h-4" /> Connection Error
                </span>
              )}
              {connectionStatus === 'unknown' && (
                <span className="text-gray-500 text-sm">Not configured</span>
              )}
            </div>

            {/* NocoDB URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                NocoDB URL
              </label>
              <Input
                value={nocodbSettings.url}
                onChange={(e) => setNocodbSettings({ ...nocodbSettings, url: e.target.value })}
                placeholder="https://app.nocodb.com"
              />
              <p className="text-xs text-gray-500 mt-1">
                Use https://app.nocodb.com for NocoDB Cloud
              </p>
            </div>

            {/* API Token */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                API Token
              </label>
              <Input
                type="password"
                value={nocodbSettings.token}
                onChange={(e) => setNocodbSettings({ ...nocodbSettings, token: e.target.value })}
                placeholder="xc-token-xxxxxxx"
              />
              <p className="text-xs text-gray-500 mt-1">
                <a 
                  href="https://docs.nocodb.com/developer-resources/rest-APIs#authentication" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  How to get your API token →
                </a>
              </p>
            </div>

            {/* Project/Base ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Base ID (Project ID)
              </label>
              <Input
                value={nocodbSettings.projectId}
                onChange={(e) => setNocodbSettings({ ...nocodbSettings, projectId: e.target.value })}
                placeholder="p3579j1xdwtwmb8"
              />
              <p className="text-xs text-gray-500 mt-1">
                Found in your NocoDB base URL: app.nocodb.com/#/nc/<strong>BASE_ID</strong>
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
              <Button onClick={testConnection} variant="outline" disabled={testing}>
                {testing ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Testing...
                  </>
                ) : (
                  <>
                    <Link2 className="w-4 h-4 mr-2" />
                    Test Connection
                  </>
                )}
              </Button>
              
              <Button onClick={saveSettings} disabled={saving}>
                {saving ? 'Saving...' : 'Save Settings'}
              </Button>

              {nocodbSettings.isConfigured && (
                <Button onClick={clearSettings} variant="outline" className="!text-red-600">
                  Disconnect
                </Button>
              )}
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <h4 className="font-semibold text-blue-800 mb-2">📊 What does NocoDB do?</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Automatically creates a table for each published form</li>
                <li>• Syncs all form submissions to NocoDB in real-time</li>
                <li>• View and manage your data in a spreadsheet-like interface</li>
                <li>• Export to CSV, connect to other tools via API</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
