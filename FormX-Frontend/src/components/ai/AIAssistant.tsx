import { useState } from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { aiService } from '../../services/aiService';
import { toast } from '../ui/utils/notifs';

interface AIAssistantProps {
  onCodeGenerated: (code: string, name: string, description: string) => void;
  onClose: () => void;
}

const SUGGESTIONS = [
  'Check for duplicate email addresses',
  'Validate against approved whitelist',
  'Limit submissions to 100 entries',
  'Auto-calculate total from quantity × price',
];

export default function AIAssistant({ onCodeGenerated, onClose }: AIAssistantProps) {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!prompt.trim()) {
      toast.error('Please describe what you want the script to do');
      return;
    }

    setLoading(true);
    try {
      const result = await aiService.generateScript({ prompt });
      onCodeGenerated(result.code, result.name, result.description);
    } catch (error) {
      const message =
        (error as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        'Failed to generate script';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      open
      onClose={loading ? () => {} : onClose}
      title="AI Script Generator"
      icon={<Sparkles className="w-5 h-5 text-purple-600" />}
      footer={
        <>
          <Button variant="outline" onClick={onClose} disabled={loading}>
            Cancel
          </Button>
          <Button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generate
              </>
            )}
          </Button>
        </>
      }
    >
      <div className="p-6 space-y-4">
        <div>
          <label htmlFor="ai-script-prompt" className="block text-sm font-semibold text-gray-700 mb-2">
            What should your script do?
          </label>
          <textarea
            id="ai-script-prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Example: Check for duplicate emails and prevent submission"
            className="w-full h-28 px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm"
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold text-gray-700">Try these:</p>
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setPrompt(s)}
              disabled={loading}
              className="block w-full text-left text-xs px-3 py-2 bg-gray-50 hover:bg-purple-50 border border-gray-200 rounded-lg transition-colors disabled:opacity-50"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
}
