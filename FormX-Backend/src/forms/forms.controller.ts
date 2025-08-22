import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Ip,
  Req,
  UseGuards,
  Query,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
  DefaultValuePipe,
  HttpStatus,
  HttpCode,
  Headers,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBody,
  ApiQuery,
  ApiOperation,
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
  ApiBearerAuth,
  ApiNotFoundResponse,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';
import { FormsService } from './forms.service';
import { CreateFormDto, UpdateFormDto, SubmitFormDto } from './dto/form.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { OptionalAuthGuard } from '../auth/guards/optional-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import type { User } from '@prisma/client';
import { Public } from '../auth/decorators/public.decorator';
import type { Request } from 'express';
import { SheetsService } from '../sheets/sheets.service';

@ApiTags('Forms')
@Controller('forms')
@UsePipes(new ValidationPipe({ whitelist: true, transform: true }))
export class FormsController {
  constructor(
    private formsService: FormsService,
    private sheetsService: SheetsService,
  ) { }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Create a new form',
    description: 'This endpoint allows users to create a new form.',
  })
  @ApiBody({ type: CreateFormDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The form has been successfully created.',
    type: CreateFormDto,
  })
  @ApiUnauthorizedResponse({
    example: {
      statusCode: HttpStatus.UNAUTHORIZED,
      description: 'Unauthorized - JWT token is missing or invalid',
    },
  })
  @ApiBadRequestResponse({
    example: {
      statusCode: HttpStatus.BAD_REQUEST,
      description: 'Invalid form data - Validation failed',
    },
  })
  async create(
    @CurrentUser() user: User,
    @Body() createFormDto: CreateFormDto,
  ) {
    return this.formsService.createForm(user.id, createFormDto);
  }

  @Get('my')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Get all forms for current user',
    description: 'All forms created by the authenticated user with pagination.',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of items per page',
    example: 10,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'User forms retrieved successfully',
    schema: {
      example: {
        data: [
          {
            id: 'clm5j4k2v0001le08wqLLxNya7c',
            title: 'Customer Feedback Survey',
            description: 'Please help us improve our services',
            isActive: true,
            isPublic: false,
            createdAt: '2025-09-26T10:00:00.000Z',
            submissionCount: 42,
          },
        ],
        pagination: {
          page: 1,
          limit: 10,
          total: 5,
          pages: 1,
        },
      },
    },
  })
  async getMyForms(
    @CurrentUser() user: User,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('includeInactive') includeInactive?: boolean,
  ) {
    return this.formsService.getUserForms(
      user.id,
      page,
      limit,
      includeInactive ?? false,
    );
  }

  @Get(':id')
  @UseGuards(OptionalAuthGuard)
  @ApiOperation({
    summary: 'Get form by ID',
    description:
      'Retrieve a form by its ID. Public forms can be accessed with or without authentication.',
  })
  @ApiParam({
    name: 'id',
    description: 'Form unique identifier',
    example: 'clm5j4k2v0001le08wqDxGya7c',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Form retrieved successfully',
  })
  @ApiNotFoundResponse({ description: 'Form not found' })
  async findOne(@Param('id') id: string, @CurrentUser() user?: User) {
    return this.formsService.findOne(id, user);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update form',
    description: 'Update form details. Only the owner can update the form.',
  })
  @ApiParam({
    name: 'id',
    description: 'Form unique identifier',
    example: 'clm5j4k2v0001le08wqDxGya7c',
  })
  @ApiBody({ type: UpdateFormDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'The form has been successfully updated.',
    type: UpdateFormDto,
  })
  @ApiUnauthorizedResponse({
    description: 'Unauthorized - JWT token is missing or invalid',
  })
  @ApiNotFoundResponse({ description: 'Form not found or Access denied ' })
  async update(
    @Param('id') id: string,
    @CurrentUser() user: User,
    @Body() updateFormDto: UpdateFormDto,
  ) {
    return this.formsService.updateForm(id, user.id, updateFormDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Delete form',
    description: 'Delete a form by its ID. Only the owner can delete the form.',
  })
  @ApiParam({
    name: 'id',
    description: 'Form unique identifier',
    example: 'clm5j4k2v0001le08wqDxGya7c',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Form deleted successfully',
    schema: {
      example: {
        success: true,
        message: 'Form deleted successfully',
      },
    },
  })
  @ApiNotFoundResponse({ description: 'Form not found or access denied' })
  async delete(@Param('id') id: string, @CurrentUser() user: User) {
    return this.formsService.delete(id, user.id);
  }

  @Post(':id/submit')
  @Public()
  @UseGuards(OptionalAuthGuard)
  @ApiOperation({
    summary: 'Submit a form',
    description:
      'Submit data to a form. Public forms can be submitted with/without authentication.',
  })
  @ApiParam({
    name: 'id',
    description: 'Form unique identifier',
    example: 'clm5j4k2v0001le08wqDxGya7c',
  })
  @ApiBody({
    type: SubmitFormDto,
    examples: {
      'feedback-form': {
        summary: 'Customer feedback submission',
        value: {
          data: {
            name: 'John Doe',
            email: 'john.doe@example.com',
            rating: 'Excellent',
            comments: 'Great service, keep it up!',
          },
        },
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Form submitted successfully',
    schema: {
      example: {
        success: true,
        message: 'Form submitted successfully',
        submissionId: 'sRbm1234567890',
      },
    },
  })
  @ApiBadRequestResponse({ description: 'Invalid form data or form inactive' })
  @ApiNotFoundResponse({ description: 'Form not found' })
  async submit(
    @Param('id') id: string,
    @Body() submitFormDto: SubmitFormDto,
    @Ip() ipRaw: string,
    @Req() request: Request,
    @CurrentUser() user?: User,
  ) {
    const ip = ipRaw ?? 'unknown';
    const userAgent = request.get('User-Agent') ?? 'unknown';
    return this.formsService.submitForm(id, submitFormDto, user, {
      ip,
      userAgent,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/submissions')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Get submissions for form',
    description: 'Retrieve submissions for a specific form with pagination.',
  })
  @ApiParam({
    name: 'id',
    description: 'Form unique identifier',
    example: 'clm5j4k2v0001le08wqzxya7c',
  })
  @ApiQuery({
    name: 'page',
    required: false,
    description: 'Page number for pagination',
    example: 1,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Number of items per page',
    example: 25,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Form submissions retrieved successfully',
    schema: {
      example: {
        data: [
          {
            id: 'clm5j4k2v0002le08wqzFxFya7d',
            data: {
              name: 'John Doe',
              email: 'john.doe@example.com',
              rating: 'Excellent',
            },
            createdAt: '2023-09-26T10:00:00.000Z',
          },
        ],
        pagination: {
          page: 1,
          limit: 25,
          total: 100,
          pages: 4,
        },
      },
    },
  })
  @ApiNotFoundResponse({ description: 'Form not found or access denied' })
  async getSubmissions(
    @Param('id') formId: string,
    @CurrentUser() user: User,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page?: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit?: number,
  ) {
    return this.formsService.getSubmissions(formId, user.id, { page, limit });
  }

  @Get(':id/submissions/count')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Get submission count for form',
    description:
      'Retrieve the total number of submissions for a specific form.',
  })
  @ApiParam({
    name: 'id',
    description: 'Form unique identifier',
    example: 'clm5j4k2v0001le08wqzFxyFa7c',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Submission count retrieved successfully',
    schema: {
      example: {
        count: 42,
      },
    },
  })
  async getSubmissionCount(@Param('id') id: string, @CurrentUser() user: User) {
    return this.formsService.getSubmissionCount(id, user.id);
  }

  @Delete(':id/submissions/:submissionId')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Delete a specific submission',
    description: 'Delete a single form submission by ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'Form unique identifier',
    example: 'clm5j4k2v0001le08wqzFxyFa7c',
  })
  @ApiParam({
    name: 'submissionId',
    description: 'Submission unique identifier',
    example: 'clm5j4k2v0002le08wqzFxFya7d',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Submission deleted successfully',
  })
  @ApiNotFoundResponse({ description: 'Submission not found' })
  async deleteSubmission(
    @Param('id') formId: string,
    @Param('submissionId') submissionId: string,
    @CurrentUser() user: User,
  ) {
    return this.formsService.deleteSubmission(formId, submissionId, user.id);
  }

  @Get(':id/submissions/export/csv')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Export submissions as CSV',
    description: 'Download all form submissions as a CSV file.',
  })
  @ApiParam({
    name: 'id',
    description: 'Form unique identifier',
    example: 'clm5j4k2v0001le08wqzFxyFa7c',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'CSV file download',
    content: { 'text/csv': {} },
  })
  async exportSubmissionsCsv(
    @Param('id') formId: string,
    @CurrentUser() user: User,
    @Req() req: Request,
  ) {
    const csv = await this.formsService.exportSubmissionsToCsv(formId, user.id);
    const res = (req as any).res;
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename="submissions-${formId}.csv"`);
    return csv;
  }

  @Public()
  @Post(':id/submit/public')
  async submitPublic(
    @Param('id') formId: string,
    @Body() submitFormDto: SubmitFormDto,
    @Req() req: Request,
    @Ip() ip: string,
    @Headers('user-agent') userAgent: string,
  ) {
    const user = req.user as User | undefined;
    return this.formsService.submitForm(formId, submitFormDto, user, {
      ip,
      userAgent,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get('my-submissions')
  async getMySubmissions(
    @CurrentUser() user: User,
    @Query('formId') formId?: string,
  ) {
    return this.formsService.getMySubmissions(user.id, formId);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id/settings')
  async updateSettings(
    @Param('id') id: string,
    @CurrentUser() user: User,
    @Body('settings') settings: Record<string, unknown>,
  ) {
    return this.formsService.updateForm(id, user.id, { settings });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/nocodb')
  async getNocodbTable(@Param('id') formId: string, @CurrentUser() user: User) {
    // Verify ownership
    await this.formsService.findOne(formId, user);
    const nocodbTable = await this.sheetsService.getTableInfo(formId);

    if (!nocodbTable) {
      return null;
    }

    return nocodbTable;
  }

  // ✅ ADD: Create NocoDB table
  @UseGuards(JwtAuthGuard)
  @Post(':id/nocodb')
  @HttpCode(HttpStatus.CREATED)
  async createNocodbTable(
    @Param('id') formId: string,
    @CurrentUser() user: User,
  ) {
    // Verify ownership
    const form = await this.formsService.findOne(formId, user);
    if (!form.schema) {
      throw new Error('Form schema is required to create NocoDB table');
    }
    // Check if table already exists
    const existing = await this.sheetsService.getTableInfo(formId);
    if (existing) {
      return existing;
    }

    // Create table
    const nocodbTable = await this.sheetsService.createTableForForm(
      formId,
      form.schema as any,
    );
    return nocodbTable;
  }

  // ✅ ADD: Delete NocoDB table
  @UseGuards(JwtAuthGuard)
  @Delete(':id/nocodb')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteNocodbTable(
    @Param('id') formId: string,
    @CurrentUser() user: User,
  ) {
    // Verify ownership
    await this.formsService.findOne(formId, user);

    await this.sheetsService.deleteTable(formId);
  }

  // ✅ ADD: Get NocoDB table data
  @UseGuards(JwtAuthGuard)
  @Get(':id/nocodb/data')
  async getNocodbData(
    @Param('id') formId: string,
    @CurrentUser() user: User,
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('sort') sort = '-submitted_at',
  ) {
    // Verify ownership
    await this.formsService.findOne(formId, user);
    return this.sheetsService.getTableData(formId, limit, offset, sort);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/nocodb/sync')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Re-sync the NocoDB table',
    description:
      'Updates the NocoDB table columns to match the current form schema and pushes all local submissions to it.',
  })
  @ApiParam({ name: 'id', description: 'Form unique identifier' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Sync completed',
    schema: { example: { synced: 12 } },
  })
  @ApiNotFoundResponse({ description: 'Form or NocoDB table not found' })
  async syncNocodb(@Param('id') formId: string, @CurrentUser() user: User) {
    const form = await this.formsService.findOne(formId, user);
    const existing = await this.sheetsService.getTableInfo(formId);
    if (!existing) {
      throw new NotFoundException(
        'NocoDB table not found for this form. Create it first.',
      );
    }
    return this.sheetsService.syncTableForForm(formId, form.schema as any);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/nocodb/export')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Export the NocoDB table as CSV',
    description: 'Downloads all rows currently stored in the linked NocoDB table as a CSV file.',
  })
  @ApiParam({ name: 'id', description: 'Form unique identifier' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'CSV file download',
    content: { 'text/csv': {} },
  })
  @ApiNotFoundResponse({ description: 'Form or NocoDB table not found' })
  async exportNocodb(
    @Param('id') formId: string,
    @CurrentUser() user: User,
    @Req() req: Request,
  ) {
    await this.formsService.findOne(formId, user);
    const csv = await this.sheetsService.exportTableToCsv(formId);
    const res = (req as any).res;
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="nocodb-export-${formId}.csv"`,
    );
    return csv;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id/submissions/unified')
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Get submissions in a unified answers/values shape',
    description:
      'Returns all submissions for the form with answers, values and namedValues fields.',
  })
  @ApiParam({ name: 'id', description: 'Form unique identifier' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Unified submissions retrieved' })
  @ApiNotFoundResponse({ description: 'Form not found or access denied' })
  async getUnifiedSubmissions(
    @Param('id') formId: string,
    @CurrentUser() user: User,
  ) {
    return this.formsService.getUnifiedSubmissions(formId, user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/submissions/query')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Query submissions with filters',
    description:
      'Filters submissions by an equality "where" clause on the submission data, with optional limit/offset/sort.',
  })
  @ApiParam({ name: 'id', description: 'Form unique identifier' })
  @ApiBody({
    schema: {
      example: { where: { rating: 'Excellent' }, limit: 25, offset: 0, sort: '-submitted_at' },
    },
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Filtered submissions retrieved' })
  @ApiNotFoundResponse({ description: 'Form not found or access denied' })
  async querySubmissions(
    @Param('id') formId: string,
    @CurrentUser() user: User,
    @Body()
    query: { where?: Record<string, unknown>; limit?: number; offset?: number; sort?: string },
  ) {
    return this.formsService.querySubmissions(formId, user.id, query);
  }
}
