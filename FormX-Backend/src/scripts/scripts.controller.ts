import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  IsIn,
  IsInt,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';
import type { User } from '@prisma/client';
import { ScriptsService } from './scripts.service';
import { CreateScriptDto } from './dto/create-script.dto';
import { UpdateScriptDto } from './dto/update-script.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

class AttachScriptDto {
  @IsString()
  @IsNotEmpty()
  scriptId!: string;

  @IsString()
  @IsNotEmpty()
  formId!: string;

  @IsIn(['validate', 'beforeSubmit', 'afterSubmit'])
  event!: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  order?: number;
}

class DetachScriptDto {
  @IsString()
  @IsNotEmpty()
  scriptId!: string;

  @IsString()
  @IsNotEmpty()
  formId!: string;

  @IsIn(['validate', 'beforeSubmit', 'afterSubmit'])
  event!: string;
}

class TestScriptDto {
  @IsOptional()
  @IsObject()
  context?: Record<string, unknown>;
}

@ApiTags('Scripts')
@Controller('scripts')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class ScriptsController {
  constructor(private scriptsService: ScriptsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new script' })
  async create(@CurrentUser() user: User, @Body() dto: CreateScriptDto) {
    return this.scriptsService.createScript(
      user.id,
      dto.name,
      dto.code,
      dto.description,
    );
  }

  @Post('attach')
  @ApiOperation({ summary: 'Attach a script to a form for a given event' })
  async attach(@CurrentUser() user: User, @Body() dto: AttachScriptDto) {
    return this.scriptsService.attachScriptToForm(
      dto.scriptId,
      dto.formId,
      dto.event,
      dto.order ?? 0,
      user.id,
    );
  }

  @Post('detach')
  @ApiOperation({ summary: 'Detach a script from a form for a given event' })
  async detach(@CurrentUser() user: User, @Body() dto: DetachScriptDto) {
    return this.scriptsService.detachScriptFromForm(
      dto.scriptId,
      dto.formId,
      dto.event,
      user.id,
    );
  }

  @Get('my')
  @ApiOperation({ summary: 'List scripts owned by the current user' })
  async getMyScripts(@CurrentUser() user: User) {
    return this.scriptsService.getUserScripts(user.id);
  }

  @Get('form/:formId')
  @ApiOperation({ summary: 'List scripts attached to a form' })
  async getFormScripts(
    @Param('formId') formId: string,
    @CurrentUser() user: User,
  ) {
    return this.scriptsService.getFormScripts(formId, user.id);
  }

  @Get('templates')
  @ApiOperation({ summary: 'List starter script templates' })
  async getTemplates() {
    return this.scriptsService.getScriptTemplates();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a script by ID' })
  async getScript(@Param('id') id: string, @CurrentUser() user: User) {
    return this.scriptsService.getScript(id, user.id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a script' })
  async update(
    @Param('id') id: string,
    @CurrentUser() user: User,
    @Body() dto: UpdateScriptDto,
  ) {
    return this.scriptsService.updateScript(id, user.id, dto);
  }

  @Post(':id/test')
  @ApiOperation({ summary: 'Execute a script against a test context' })
  async test(
    @Param('id') id: string,
    @CurrentUser() user: User,
    @Body() dto: TestScriptDto,
  ) {
    const context = {
      event: 'test',
      ...(dto.context || {}),
    };
    return this.scriptsService.testScript(id, user.id, context as never);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a script' })
  async delete(@Param('id') id: string, @CurrentUser() user: User) {
    return this.scriptsService.deleteScript(id, user.id);
  }
}
