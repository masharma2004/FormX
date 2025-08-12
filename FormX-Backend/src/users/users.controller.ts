import {
    Controller,
    Get,
    Put,
    Post,
    Body,
    UseGuards,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UsersService } from './users.service';
import type { User } from '@prisma/client';

interface NocoDBSettings {
    url?: string;
    token?: string;
    projectId?: string;
}

interface UserSettings {
    nocodb?: NocoDBSettings;
}

interface TestConnectionResult {
    success: boolean;
    error?: string;
}

class UpdateSettingsDto {
    nocodb?: NocoDBSettings;
}

class TestNocoDBDto {
    url!: string;
    token!: string;
    projectId!: string;
}

@ApiTags('Users')
@Controller('users')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get('settings')
    @ApiOperation({ summary: 'Get user settings' })
    @ApiResponse({ status: 200, description: 'User settings retrieved' })
    async getSettings(@CurrentUser() user: User): Promise<UserSettings> {
        return this.usersService.getSettings(user.id);
    }

    @Put('settings')
    @ApiOperation({ summary: 'Update user settings' })
    @ApiResponse({ status: 200, description: 'User settings updated' })
    async updateSettings(
        @CurrentUser() user: User,
        @Body() updateSettingsDto: UpdateSettingsDto,
    ): Promise<UserSettings> {
        return this.usersService.updateSettings(user.id, updateSettingsDto);
    }

    @Post('settings/nocodb/test')
    @HttpCode(HttpStatus.OK)
    @ApiOperation({ summary: 'Test NocoDB connection' })
    @ApiResponse({ status: 200, description: 'Connection test result' })
    async testNocoDBConnection(
        @CurrentUser() user: User,
        @Body() testDto: TestNocoDBDto,
    ): Promise<TestConnectionResult> {
        return this.usersService.testNocoDBConnection(testDto);
    }
}
