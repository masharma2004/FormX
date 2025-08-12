import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import axios from 'axios';

interface NocoDBSettings {
    url?: string;
    token?: string;
    projectId?: string;
}

interface UserSettings {
    nocodb?: NocoDBSettings;
}

@Injectable()
export class UsersService {
    private readonly logger = new Logger(UsersService.name);

    constructor(private prisma: PrismaService) { }

    async getSettings(userId: string): Promise<UserSettings> {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { settings: true },
        });

        const settings = (user?.settings as UserSettings) || {};

        // Mask the token for security
        if (settings.nocodb?.token) {
            settings.nocodb.token = settings.nocodb.token.substring(0, 8) + '...';
        }

        return settings;
    }

    async updateSettings(userId: string, newSettings: UserSettings): Promise<UserSettings> {
        // Fetch current settings to preserve other fields
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { settings: true },
        });

        const currentSettings = (user?.settings as UserSettings) || {};

        // Merge settings
        const mergedSettings: UserSettings = {
            ...currentSettings,
            ...newSettings,
            nocodb: {
                ...currentSettings.nocodb,
                ...newSettings.nocodb,
            },
        };

        // If token wasn't updated (ends with ...), keep the original
        if (mergedSettings.nocodb?.token?.endsWith('...')) {
            mergedSettings.nocodb.token = currentSettings.nocodb?.token;
        }

        await this.prisma.user.update({
            where: { id: userId },
            data: { settings: mergedSettings as object },
        });

        // Return masked version
        const result = { ...mergedSettings };
        if (result.nocodb?.token) {
            result.nocodb.token = result.nocodb.token.substring(0, 8) + '...';
        }

        return result;
    }

    async testNocoDBConnection(dto: { url: string; token: string; projectId: string }): Promise<{ success: boolean; error?: string }> {
        try {
            // Test connection to NocoDB
            const response = await axios.get(`${dto.url}/api/v2/meta/bases/${dto.projectId}`, {
                headers: { 'xc-token': dto.token },
                timeout: 10000,
            });

            if (response.status === 200) {
                return { success: true };
            } else {
                return { success: false, error: `Unexpected status: ${response.status}` };
            }
        } catch (error) {
            this.logger.error('NocoDB connection test failed:', error);
            const message = error instanceof Error ? error.message : 'Unknown error';

            if (message.includes('401')) {
                return { success: false, error: 'Invalid API token' };
            } else if (message.includes('404')) {
                return { success: false, error: 'Base not found - check your Project ID' };
            }

            return { success: false, error: message };
        }
    }

    async getUserNocoDBCredentials(userId: string): Promise<NocoDBSettings | null> {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: { settings: true },
        });

        const settings = (user?.settings as UserSettings) || {};
        return settings.nocodb || null;
    }
}
