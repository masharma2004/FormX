import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
import { IsNotEmpty, IsObject, IsOptional, IsString } from 'class-validator';
import type { User } from '@prisma/client';
import { AiService } from './ai.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

class GenerateScriptDto {
  @IsString()
  @IsNotEmpty()
  prompt!: string;

  @IsOptional()
  @IsObject()
  formSchema?: Record<string, unknown>;
}

@ApiTags('AI')
@Controller('ai')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class AiController {
  constructor(private aiService: AiService) {}

  @Post('generate-script')
  @UseGuards(ThrottlerGuard)
  @Throttle({ default: { ttl: 60000, limit: 10 } })
  @ApiOperation({ summary: 'Generate a form automation/validation script using AI' })
  async generateScript(@CurrentUser() user: User, @Body() dto: GenerateScriptDto) {
    return this.aiService.generateScript({ ...dto, userId: user.id });
  }

  @Get('usage')
  @ApiOperation({ summary: 'Get AI usage stats for the current user' })
  async getUsage(@CurrentUser() user: User, @Query('days') days?: string) {
    return this.aiService.getUserUsageStats(user.id, days ? Number(days) : 30);
  }
}
