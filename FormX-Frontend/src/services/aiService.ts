import api from '../lib/api';

export interface GenerateScriptParams {
  prompt: string;
  formSchema?: Record<string, unknown>;
}

export interface GenerateScriptResult {
  code: string;
  name: string;
  description: string;
  model?: string;
  tokensUsed?: number;
}

class AiService {
  async generateScript(params: GenerateScriptParams): Promise<GenerateScriptResult> {
    const response = await api.post<GenerateScriptResult>('/ai/generate-script', params);
    return response.data;
  }
}

export const aiService = new AiService();
