import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import ResponseTable from '../../components/form-builder/ResponseTable';
import ResponseDetailModal from '../../components/form-builder/ResponseDetailModal';
import { formService, type FormResultType, type SubmissionResultType } from '../../services/formService';
import { toast } from 'sonner';
import { ArrowLeft, Download, Loader2 } from 'lucide-react';

export default function FormResponses() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [form, setForm] = useState<FormResultType | null>(null);
  const [submissions, setSubmissions] = useState<SubmissionResultType[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<SubmissionResultType | null>(null);

  const limit = 25;

  const loadData = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    try {
      const [formData, submissionsData] = await Promise.all([
        formService.getFormById(id),
        formService.getFormSubmissions(id, page, limit),
      ]);
      setForm(formData);
      setSubmissions(submissionsData.submissions);
      setTotal(submissionsData.total);
      setTotalPages(submissionsData.totalPages);
    } catch (error) {
      toast.error(
        (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
          'Failed to load responses'
      );
      console.error('Error loading responses:', error);
    } finally {
      setLoading(false);
    }
  }, [id, page]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleDelete = async (submissionId: string) => {
    if (!id) return;
    if (!confirm('Delete this response? This cannot be undone.')) return;

    try {
      await formService.deleteSubmission(id, submissionId);
      setSubmissions((prev) => prev.filter((s) => s.id !== submissionId));
      setTotal((prev) => prev - 1);
      toast.success('Response deleted');
    } catch (error) {
      toast.error('Failed to delete response');
      console.error('Error deleting response:', error);
    }
  };

  const handleExport = async () => {
    if (!id) return;
    setExporting(true);
    try {
      const blob = await formService.exportSubmissionsCSV(id);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${form?.title || 'form'}-responses.csv`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
      toast.success('CSV exported');
    } catch (error) {
      toast.error('Failed to export CSV');
      console.error('Error exporting CSV:', error);
    } finally {
      setExporting(false);
    }
  };

  if (loading && !form) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
      </div>
    );
  }

  if (!form) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={() => navigate(`/forms/${id}/edit`)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Form
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{form.title}</h1>
                <p className="text-sm text-gray-500">{total} response{total === 1 ? '' : 's'}</p>
              </div>
            </div>
            <Button variant="outline" onClick={handleExport} disabled={exporting || total === 0}>
              {exporting ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Download className="w-4 h-4 mr-2" />
              )}
              Export CSV
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <ResponseTable
            form={form}
            submissions={submissions}
            onView={setSelectedSubmission}
            onDelete={handleDelete}
          />
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
            >
              Previous
            </Button>
            <span className="text-sm text-gray-600">
              Page {page} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </main>

      {selectedSubmission && (
        <ResponseDetailModal
          form={form}
          submission={selectedSubmission}
          onClose={() => setSelectedSubmission(null)}
        />
      )}
    </div>
  );
}
