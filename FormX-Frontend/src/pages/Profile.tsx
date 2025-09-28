import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';
import { Button } from '../components/ui/Button';
import { toast } from 'sonner';
import { User, Mail, Shield, LogOut, ArrowLeft } from 'lucide-react';
import { formService } from '../services/formService';

interface Stats {
  totalForms: number;
  totalResponses: number;
  publishedForms: number;
}

export default function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [stats, setStats] = useState<Stats>({ totalForms: 0, totalResponses: 0, publishedForms: 0 });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const forms = await formService.getMyForms();
      let totalResponses = 0;
      let publishedForms = 0;

      for (const form of forms) {
        if (form.isPublic) publishedForms++;
        try {
          const submissions = await formService.getFormSubmissions(form.id, 1, 1);
          totalResponses += submissions.total || 0;
        } catch {
          // Ignore individual form errors
        }
      }

      setStats({
        totalForms: forms.length,
        totalResponses,
        publishedForms,
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      logout();
      toast.success('Logged out successfully!');
      navigate('/login');
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/dashboard')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
            </div>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="!text-red-600 !border-red-300 hover:!bg-red-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-8">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
                <User className="w-10 h-10 text-gray-600" />
              </div>
              <div className="text-white">
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-blue-100">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6 space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name
                  </label>
                  <p className="text-gray-900 bg-gray-50 px-4 py-2 rounded-md">{user.name}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address
                  </label>
                  <p className="text-gray-900 bg-gray-50 px-4 py-2 rounded-md">{user.email}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Shield className="w-4 h-4 inline mr-2" />
                    User ID
                  </label>
                  <p className="text-gray-600 bg-gray-50 px-4 py-2 rounded-md font-mono text-sm">
                    {user.id}
                  </p>
                </div>
              </div>
            </div>

            {/* Account Stats */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Statistics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-blue-600 font-medium">Total Forms</p>
                  <p className="text-3xl font-bold text-blue-900 mt-1">{stats.totalForms}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="text-sm text-green-600 font-medium">Total Responses</p>
                  <p className="text-3xl font-bold text-green-900 mt-1">{stats.totalResponses}</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm text-purple-600 font-medium">Published Forms</p>
                  <p className="text-3xl font-bold text-purple-900 mt-1">{stats.publishedForms}</p>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h3>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-red-900">Delete Account</h4>
                    <p className="text-sm text-red-700 mt-1">
                      Permanently delete your account and all associated data.
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="!text-red-600 !border-red-300 hover:!bg-red-100"
                    onClick={() => {
                      if (
                        confirm(
                          'Are you sure you want to delete your account? This action cannot be undone.'
                        )
                      ) {
                        toast.error('Account deletion not implemented yet');
                      }
                    }}
                  >
                    Delete Account
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}