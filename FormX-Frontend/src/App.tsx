import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster,toast } from 'sonner';
import { useAuthStore } from './stores/authStore';
import { ProtectedRoute } from './components/guards/ProtectedRoute';
import { PublicRoute } from './components/guards/PublicRoute';
import LoginPage from './pages/auth/Login';
import RegisterPage from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import DashboardPage from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import FormBuilder from './pages/forms/FormBuilder';
import FormResponses from './pages/forms/FormResponses';
import ScriptBuilder from './pages/scripts/ScriptBuilder';
import ScriptsList from './pages/scripts/ScriptsList';
import NotFound from './pages/NotFound';
import PublicFormSubmission from './pages/PublicFormSubmission';
import FormSettings from './pages/forms/FormSettings';
import FormFill from './pages/forms/FormFill';

function App() {

    const hasHydrated = useAuthStore((state) => state._hasHydrated);
    const checkAuth = useAuthStore((state) => state.checkAuth);
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

    useEffect(() => {

        if (hasHydrated && isAuthenticated && navigator.onLine) {
            checkAuth();
        }

        const handleOnline = () => {
            toast.success('Back online!');
            checkAuth();
        };

        const handleOffline = () => {
            toast.warning('You are offline. You can continue working.');
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, [hasHydrated, isAuthenticated, checkAuth]);

    if (!hasHydrated) {
        return null;
    }

    return (
      <>
      <Toaster position="top-right" richColors />
        <Router>
                <Routes>
                    <Route
                        path="/login"
                        element={
                            <PublicRoute>
                                <LoginPage />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <PublicRoute>
                                <RegisterPage />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/forgot-password"
                        element={
                            <PublicRoute>
                                <ForgotPassword />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/reset-password"
                        element={
                            <PublicRoute>
                                <ResetPassword />
                            </PublicRoute>
                        }
                    />
                    
                    <Route
                        path="/f/:formId"
                        element={
                            <PublicRoute>
                                <PublicFormSubmission />
                            </PublicRoute>
                        }
                    />

                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <DashboardPage />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/settings"
                        element={
                            <ProtectedRoute>
                                <Settings />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/forms/new"
                        element={
                            <ProtectedRoute>
                                <FormBuilder />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/forms/fill/:id"
                        element={<FormFill />}
                    />

                    <Route
                        path="/forms/:id/edit"
                        element={
                            <ProtectedRoute>
                                <FormBuilder />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/forms/edit/:id"
                        element={
                            <ProtectedRoute>
                                <FormBuilder />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/forms/:id/settings"
                        element={
                            <ProtectedRoute>
                                <FormSettings />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/forms/:id/responses"
                        element={
                            <ProtectedRoute>
                                <FormResponses />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/scripts"
                        element={
                            <ProtectedRoute>
                                <ScriptsList />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/scripts/new"
                        element={
                            <ProtectedRoute>
                                <ScriptBuilder />
                            </ProtectedRoute>
                        }
                    />

                    <Route
                        path="/scripts/:id"
                        element={
                            <ProtectedRoute>
                                <ScriptBuilder />
                            </ProtectedRoute>
                        }
                    />

                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/forms" element={<Navigate to="/dashboard" replace />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
        </Router>
      </>
    );
}

export default App;