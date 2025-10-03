import api from '../lib/api';

export interface Script {
  id: string;
  name: string;
  code: string;
  description?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface ScriptTemplate {
  id: string;
  name: string;
  code: string;
  description: string;
  event: string;
  category: 'validation' | 'transformation' | 'automation' | 'ai';
}

export interface CreateScriptDto {
  name: string;
  code: string;
  description?: string;
}

export interface AttachScriptDto {
  scriptId: string;
  formId: string;
  event: 'validate' | 'beforeSubmit' | 'afterSubmit';
  order?: number;
}

class ScriptService {
  // Get all user's scripts
  async getMyScripts(): Promise<Script[]> {
    const response = await api.get('/scripts/my');
    return response.data;
  }

  // Get script by ID
  async getScript(id: string): Promise<Script> {
    const response = await api.get(`/scripts/${id}`);
    return response.data;
  }

  // Create script
  async createScript(data: CreateScriptDto): Promise<Script> {
    const response = await api.post('/scripts', data);
    return response.data;
  }

  // Update script
  async updateScript(id: string, data: Partial<CreateScriptDto>): Promise<Script> {
    const response = await api.patch(`/scripts/${id}`, data);
    return response.data;
  }

  // Delete script
  async deleteScript(id: string): Promise<void> {
    await api.delete(`/scripts/${id}`);
  }

  // Get script templates
  async getTemplates(): Promise<ScriptTemplate[]> {
    const response = await api.get('/scripts/templates');
    return response.data;
  }

  async createFromTemplate(
    templateId: string,
    name: string,
  ): Promise<Script> {
    const response = await api.post(`/scripts/templates/${templateId}/create`, {
      name,
    });
    return response.data;
  }

  // Attach script to form
  async attachToForm(data: AttachScriptDto): Promise<void> {
    await api.post('/scripts/attach', data);
  }

  async detachFromForm(scriptId: string, formId: string, event: string): Promise<void> {
    await api.post('/scripts/detach', { scriptId, formId, event });
  }


  async getFormScripts(formId: string, event?: string): Promise<unknown[]> {
    const params = event ? { event } : {};
    const response = await api.get(`/scripts/form/${formId}`, { params });
    return response.data;
  }

  async testScript(id: string, context?: Record<string, unknown>): Promise<unknown> {
    const response = await api.post(`/scripts/${id}/test`, { context });
    return response.data;
  }
}

export const scriptService = new ScriptService();