import api from '../lib/api';
import type { FormResultType } from '../lib/zod/schemas/variants/result/Form.result';
import type { SubmissionResultType } from '../lib/zod/schemas/variants/result/Submission.result';
import type { FormInputType } from '../lib/zod/schemas/variants/input/Form.input';
import type { SubmissionInputType } from '../lib/zod/schemas/variants/input/Submission.input';
import type { NocodbTableResultType } from '../lib/zod/schemas/variants/result/NocodbTable.result';
import { AxiosError } from 'axios';

export interface PaginatedSubmissions {
  submissions: SubmissionResultType[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface UnifiedResponse {
  answers: Record<string, unknown>;
  values: unknown[];
  namedValues: Record<string, unknown>;
  id: string;
  submittedAt: string;
  formId: string;
}

export interface SheetQuery {
  where?: Record<string, unknown>;
  limit?: number;
  offset?: number;
  sort?: string;
}

class FormService {
  async createForm(data: FormInputType): Promise<FormResultType> {
    const response = await api.post<FormResultType>('/forms', data);
    return response.data;
  }

  async getFormById(id: string): Promise<FormResultType> {
    const response = await api.get<FormResultType>(`/forms/${id}`);
    return response.data;
  }

  async updateForm(id: string, data: FormInputType): Promise<FormResultType> {
    const response = await api.put<FormResultType>(`/forms/${id}`, data);
    return response.data;
  }

  async deleteForm(id: string): Promise<void> {
    await api.delete(`/forms/${id}`);
  }

  async getMyForms(): Promise<FormResultType[]> {
    // Pass includeInactive=true to show draft forms on dashboard
    const response = await api.get<{ data: FormResultType[]; pagination: unknown } | FormResultType[]>(
      '/forms/my',
      { params: { includeInactive: true } }
    );
    // Backend returns {data: [...], pagination: {...}} not array directly
    const result = response.data;
    if (Array.isArray(result)) {
      return result;
    }
    if (result && 'data' in result && Array.isArray(result.data)) {
      return result.data;
    }
    return [];
  }

  async getFormSubmissions(
    formId: string,
    page: number = 1,
    limit: number = 25
  ): Promise<PaginatedSubmissions> {
    const response = await api.get<PaginatedSubmissions>(
      `/forms/${formId}/submissions`,
      {
        params: { page, limit },
      }
    );
    return response.data;
  }

  async getSubmissionCount(formId: string): Promise<number> {
    const response = await api.get<{ count: number }>(
      `/forms/${formId}/submissions/count`
    );
    return response.data.count;
  }

  async getSubmissionById(formId: string, submissionId: string): Promise<SubmissionResultType> {
    const response = await api.get<SubmissionResultType>(
      `/forms/${formId}/submissions/${submissionId}`
    );
    return response.data;
  }

  async deleteSubmission(formId: string, submissionId: string): Promise<void> {
    await api.delete(`/forms/${formId}/submissions/${submissionId}`);
  }

  async exportSubmissionsCSV(formId: string): Promise<Blob> {
    const response = await api.get(`/forms/${formId}/submissions/export/csv`, {
      responseType: 'blob',
    });
    return response.data;
  }

  async submitForm(formId: string, data: SubmissionInputType): Promise<SubmissionResultType> {
    const response = await api.post<SubmissionResultType>(`/forms/${formId}/submit`, data);
    return response.data;
  }
  async getNocodbTable(formId: string): Promise<NocodbTableResultType | null> {
    try {
      const response = await api.get<NocodbTableResultType>(`/forms/${formId}/nocodb`);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        return null;
      }
      throw error;
    }
  }

  async createNocodbTable(formId: string): Promise<NocodbTableResultType> {
    const response = await api.post<NocodbTableResultType>(`/forms/${formId}/nocodb`);
    return response.data;
  }

  async deleteNocodbTable(formId: string): Promise<void> {
    await api.delete(`/forms/${formId}/nocodb`);
  }

  async getUnifiedSubmissions(formId: string): Promise<UnifiedResponse[]> {
    const response = await api.get<UnifiedResponse[]>(`/forms/${formId}/submissions/unified`);
    return response.data;
  }

  async querySheet(formId: string, query?: SheetQuery): Promise<UnifiedResponse[]> {
    const response = await api.post<UnifiedResponse[]>(
      `/forms/${formId}/submissions/query`,
      query || {}
    );
    return response.data;
  }

  async syncToNocodb(formId: string): Promise<{ synced: number }> {
    const response = await api.post<{ synced: number }>(`/forms/${formId}/nocodb/sync`);
    return response.data;
  }

  async exportNocodbCSV(formId: string): Promise<Blob> {
    const response = await api.get(`/forms/${formId}/nocodb/export`, {
      responseType: 'blob',
    });
    return response.data;
  }
}

export const formService = new FormService();

export type { FormResultType, SubmissionResultType, FormInputType, SubmissionInputType, NocodbTableResultType };