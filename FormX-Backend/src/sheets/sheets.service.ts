import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../database/prisma.service';
import axios, { AxiosInstance } from 'axios';
import { FormSchema, FieldType, FormField } from '../common/types/forms.types';
import { InputJsonValue } from '@prisma/client/runtime/library';

interface NocoDBColumn {
  column_name: string;
  title: string;
  dt?: string;
  uidt?: string;
  pk?: boolean;
  rqd?: boolean;
  ai?: boolean;
  system?: boolean;
  un?: boolean;
}

interface NocoDBTableResponse {
  id: string;
  table_name: string;
  columns?: Array<{ column_name: string }>;
}

interface NocoDBDataResponse {
  list?: any[];
  pageInfo?: {
    totalRows: number;
  };
}

@Injectable()
export class SheetsService {
  private readonly logger = new Logger(SheetsService.name);
  private nocodb: AxiosInstance;
  private projectId: string;

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
  ) {
    const baseURL = this.configService.get<string>('NOCODB_URL');
    const token = this.configService.get<string>('NOCODB_TOKEN');
    const projectId = this.configService.get<string>('NOCODB_PROJECT_ID');

    if (!baseURL || !token || !projectId) {
      throw new Error('Missing required NocoDB configuration');
    }

    this.projectId = projectId;

    // Use API v2 for NocoDB Cloud (app.nocodb.com)
    this.nocodb = axios.create({
      baseURL: `${baseURL}/api/v2`,
      headers: {
        'xc-token': token,
        'Content-Type': 'application/json',
      },
      timeout: 10000,
    });
  }

  async createTableForForm(formId: string, schema: FormSchema) {
    try {
      const form = await this.prisma.form.findUnique({ where: { id: formId } });
      if (!form) {
        throw new NotFoundException('Form not found');
      }

      // Check if table already exists
      const existing = await this.prisma.nocodbTable.findUnique({
        where: { formId },
      });

      if (existing) {
        this.logger.warn(`NocoDB table already exists for form ${formId}`);
        return existing;
      }

      // Prepare columns from form schema
      const columns = this.mapFormFieldsToColumns(schema);

      // Create table in NocoDB (using v2 API)
      const response = await this.nocodb.post<NocoDBTableResponse>(
        `/meta/bases/${this.projectId}/tables`,
        {
          table_name: this.sanitizeTableName(formId),
          title: form.title,
          columns: [
            {
              column_name: 'id',
              title: 'ID',
              uidt: 'ID',
              pk: true,
              ai: true,
              rqd: true,
              un: true,
            },
            {
              column_name: 'submitted_at',
              title: 'Submitted At',
              uidt: 'DateTime',
              dt: 'timestamp',
              rqd: true,
              system: true,
            },
            ...columns,
          ],
        },
      );

      const tableId = response.data.id;
      const tableName = response.data.table_name;

      // Save table reference
      const nocodbTable = await this.prisma.nocodbTable.create({
        data: {
          tableId,
          formId,
          metadata: {
            tableName,
            columns: columns.map((col) => ({
              name: col.column_name,
              type: col.uidt || col.dt,
              required: col.rqd,
            })),
          } as InputJsonValue,
        },
      });

      this.logger.log(`Created NocoDB table ${tableId} for form ${formId}`);
      return nocodbTable;
    } catch (error) {
      this.logger.error(
        `Failed to create NocoDB table: ${error instanceof Error ? error.message : String(error)}`,
      );
      throw error;
    }
  }

  async addRowToTable(formId: string, data: Record<string, any>) {
    try {
      const nocodbTable = await this.prisma.nocodbTable.findUnique({
        where: { formId },
      });

      if (!nocodbTable) {
        throw new NotFoundException(
          `NocoDB table not found for form ${formId}`,
        );
      }

      const rowData = {
        id: `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`,
        submitted_at: new Date().toISOString(),
        ...data,
      };

      // Use v2 API for adding records
      await this.nocodb.post(
        `/tables/${nocodbTable.tableId}/records`,
        rowData,
      );

      this.logger.log(`Added row to NocoDB table ${nocodbTable.tableId}`);
      return rowData;
    } catch (error) {
      this.logger.error(
        `Failed to add row to NocoDB: ${error instanceof Error ? error.message : String(error)}`,
      );
      throw error;
    }
  }

  async deleteRowFromTable(formId: string, rowId: string) {
    try {
      const nocodbTable = await this.prisma.nocodbTable.findUnique({
        where: { formId },
      });

      if (!nocodbTable) {
        this.logger.warn(`NocoDB table not found for form ${formId} - skipping delete`);
        return;
      }

      // Use v2 API for deleting records
      await this.nocodb.delete(`/tables/${nocodbTable.tableId}/records`, {
        data: { Id: rowId },
      });

      this.logger.log(`Deleted row ${rowId} from NocoDB table ${nocodbTable.tableId}`);
    } catch (error) {
      // Non-critical: log but don't throw
      this.logger.warn(
        `Failed to delete row from NocoDB (non-blocking): ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  async getTableData(
    formId: string,
    limit = 100,
    offset = 0,
    sort = '-submitted_at',
  ) {
    try {
      const nocodbTable = await this.prisma.nocodbTable.findUnique({
        where: { formId },
      });

      if (!nocodbTable) {
        throw new NotFoundException('NocoDB table not found');
      }

      // Use v2 API for fetching records
      const response = await this.nocodb.get<NocoDBDataResponse>(
        `/tables/${nocodbTable.tableId}/records`,
        {
          params: { limit, offset, sort },
        },
      );

      const data = response.data.list || [];
      const total = response.data.pageInfo?.totalRows || data.length;

      return { data, total };
    } catch (error) {
      this.logger.error(
        `Failed to fetch NocoDB data: ${error instanceof Error ? error.message : String(error)}`,
      );
      throw error;
    }
  }

  async updateTableSchema(formId: string, schema: FormSchema) {
    try {
      const nocodbTable = await this.prisma.nocodbTable.findUnique({
        where: { formId },
      });

      if (!nocodbTable) {
        return this.createTableForForm(formId, schema);
      }

      // Get existing columns
      const existingColumnsResponse =
        await this.nocodb.get<NocoDBTableResponse>(
          `/db/meta/tables/${nocodbTable.tableId}`,
        );

      const existingColumnNames = new Set(
        existingColumnsResponse.data.columns?.map((c) => c.column_name) || [],
      );

      const newColumns = this.mapFormFieldsToColumns(schema);

      // Add new columns
      for (const column of newColumns) {
        if (!existingColumnNames.has(column.column_name)) {
          await this.nocodb.post(
            `/db/meta/tables/${nocodbTable.tableId}/columns`,
            column,
          );
          this.logger.log(
            `Added column ${column.column_name} to table ${nocodbTable.tableId}`,
          );
        }
      }

      // Update metadata
      await this.prisma.nocodbTable.update({
        where: { id: nocodbTable.id },
        data: {
          metadata: {
            columns: newColumns.map((col) => ({
              name: col.column_name,
              type: col.uidt || col.dt,
              required: col.rqd,
            })),
            updatedAt: new Date().toISOString(),
          } as InputJsonValue,
        },
      });

      return nocodbTable;
    } catch (error) {
      this.logger.error(
        `Failed to update NocoDB table schema: ${error instanceof Error ? error.message : String(error)}`,
      );
      throw error;
    }
  }

  async deleteTable(formId: string) {
    try {
      const nocodbTable = await this.prisma.nocodbTable.findUnique({
        where: { formId },
      });

      if (!nocodbTable) {
        this.logger.warn(`NocoDB table not found for form ${formId}`);
        return;
      }

      await this.nocodb.delete(`/db/meta/tables/${nocodbTable.tableId}`);

      await this.prisma.nocodbTable.delete({
        where: { id: nocodbTable.id },
      });

      this.logger.log(`Deleted NocoDB table ${nocodbTable.tableId}`);
    } catch (error) {
      this.logger.error(
        `Failed to delete NocoDB table: ${error instanceof Error ? error.message : String(error)}`,
      );
      // Don't throw on delete failure
    }
  }

  private mapFormFieldsToColumns(schema: FormSchema): NocoDBColumn[] {
    if (!schema.fields || !Array.isArray(schema.fields)) {
      return [];
    }

    return schema.fields.map((field: FormField) => ({
      column_name: this.sanitizeColumnName(field.id || field.name || 'field'),
      title: field.label || field.name || 'Field',
      uidt: this.getNocodbColumnType(field.type),
      dt: this.mapFieldTypeToDbType(field.type),
      rqd: field.required || false,
    }));
  }

  private sanitizeColumnName(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9_]/g, '_')
      .replace(/^(\d)/, '_$1')
      .substring(0, 64);
  }

  private sanitizeTableName(formId: string): string {
    return `form_${formId.replace(/-/g, '_')}`;
  }

  private getNocodbColumnType(fieldType: FieldType): string {
    const typeMap: Record<FieldType, string> = {
      [FieldType.TEXT]: 'SingleLineText',
      [FieldType.EMAIL]: 'Email',
      [FieldType.FILE]: 'Attachment',
      [FieldType.NUMBER]: 'Number',
      [FieldType.INTEGER]: 'Number',
      [FieldType.DECIMAL]: 'Decimal',
      [FieldType.FLOAT]: 'Decimal',
      [FieldType.TEXTAREA]: 'LongText',
      [FieldType.SELECT]: 'SingleSelect',
      [FieldType.RADIO]: 'SingleSelect',
      [FieldType.MULTISELECT]: 'MultiSelect',
      [FieldType.DATE]: 'Date',
      [FieldType.DATETIME]: 'DateTime',
      [FieldType.BOOLEAN]: 'Checkbox',
      [FieldType.CHECKBOX]: 'Checkbox',
      [FieldType.URL]: 'URL',
      [FieldType.PHONE]: 'PhoneNumber',
    };

    return typeMap[fieldType] || 'SingleLineText';
  }

  private mapFieldTypeToDbType(fieldType: FieldType): string {
    const typeMap: Record<FieldType, string> = {
      [FieldType.TEXT]: 'varchar',
      [FieldType.EMAIL]: 'varchar',
      [FieldType.FILE]: 'varchar',
      [FieldType.URL]: 'varchar',
      [FieldType.PHONE]: 'varchar',
      [FieldType.SELECT]: 'varchar',
      [FieldType.RADIO]: 'varchar',
      [FieldType.MULTISELECT]: 'varchar',
      [FieldType.TEXTAREA]: 'text',
      [FieldType.NUMBER]: 'int',
      [FieldType.INTEGER]: 'int',
      [FieldType.DECIMAL]: 'decimal',
      [FieldType.FLOAT]: 'decimal',
      [FieldType.BOOLEAN]: 'boolean',
      [FieldType.CHECKBOX]: 'boolean',
      [FieldType.DATE]: 'date',
      [FieldType.DATETIME]: 'timestamp',
    };

    return typeMap[fieldType] || 'varchar';
  }

  /**
   * Manually re-syncs the NocoDB table: updates the table's columns to match
   * the current form schema, then pushes every local submission's data as a
   * row (a simple, idempotent-enough backfill for a manually-triggered sync).
   */
  async syncTableForForm(formId: string, schema: FormSchema) {
    await this.updateTableSchema(formId, schema);

    const submissions = await this.prisma.submission.findMany({
      where: { formId },
      orderBy: { createdAt: 'asc' },
    });

    let synced = 0;
    for (const submission of submissions) {
      try {
        await this.addRowToTable(formId, submission.data as Record<string, any>);
        synced += 1;
      } catch (error) {
        this.logger.warn(
          `Failed to sync submission ${submission.id} to NocoDB: ${error instanceof Error ? error.message : String(error)}`,
        );
      }
    }

    this.logger.log(`Synced ${synced} submission(s) to NocoDB for form ${formId}`);
    return { synced };
  }

  /**
   * Fetches all rows currently in the form's NocoDB table and returns them
   * as a CSV string.
   */
  async exportTableToCsv(formId: string): Promise<string> {
    const nocodbTable = await this.prisma.nocodbTable.findUnique({
      where: { formId },
    });

    if (!nocodbTable) {
      throw new NotFoundException('NocoDB table not found for this form');
    }

    const { data } = await this.getTableData(formId, 1000, 0, '-submitted_at');

    if (!data || data.length === 0) {
      return 'No data found';
    }

    const columnSet = new Set<string>();
    for (const row of data) {
      Object.keys(row).forEach((key) => columnSet.add(key));
    }
    const columns = Array.from(columnSet);

    const headerLine = columns.map((c) => `"${c}"`).join(',');
    const rowLines = data.map((row: Record<string, any>) =>
      columns
        .map((col) => {
          const val = row[col];
          if (val === null || val === undefined) return '""';
          const str = Array.isArray(val) ? val.join('; ') : String(val);
          return `"${str.replace(/"/g, '""')}"`;
        })
        .join(','),
    );

    return [headerLine, ...rowLines].join('\n');
  }

  async getTableInfo(formId: string) {
    try {
      const nocodbTable = await this.prisma.nocodbTable.findUnique({
        where: { formId },
        include: {
          form: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      });

      return nocodbTable;
    } catch (error) {
      this.logger.error(
        `Failed to fetch NocoDB table info: ${error instanceof Error ? error.message : String(error)}`,
      );
      return null;
    }
  }

  async getAllTables() {
    try {
      const tables = await this.prisma.nocodbTable.findMany({
        include: {
          form: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      });

      return tables;
    } catch (error) {
      this.logger.error(
        `Failed to fetch NocoDB tables: ${error instanceof Error ? error.message : String(error)}`,
      );
      return [];
    }
  }
}
