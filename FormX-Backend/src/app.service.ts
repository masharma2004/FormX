import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { InjectQueue } from '@nestjs/bull';
import { type Queue } from 'bull';
import { ConfigService } from '@nestjs/config';
import { createClient } from 'redis';
import type { RedisClientOptions } from 'redis';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  private redisClient?: ReturnType<typeof createClient>;

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService,
    @InjectQueue('submissions') private submissionsQueue: Queue,
  ) {
    this.initRedisClient().catch((error) => {
      this.logger.error(
        `Error initializing Redis client: ${error instanceof Error ? error.message : String(error)}`,
      );
    });

    this.testNocodbConnection().catch((error) => {
      this.logger.error(
        `Error testing NocoDB connection: ${error instanceof Error ? error.message : String(error)}`,
      );
    });
  }

  private async testNocodbConnection(): Promise<boolean> {
    const nocodbUrl = this.configService.get<string>('NOCODB_URL');
    const nocodbToken = this.configService.get<string>('NOCODB_TOKEN');
    const projectId = this.configService.get<string>('NOCODB_PROJECT_ID');

    if (!nocodbUrl || !nocodbToken || !projectId) {
      this.logger.warn('NocoDB configuration is incomplete - skipping connection test.');
      return false;
    }

    try {
      // !IMPORTANT Using v2 API to test connection by fetching base info
      const response = await fetch(`${nocodbUrl}/api/v2/meta/bases/${projectId}`, {
        method: 'GET',
        headers: {
          'xc-token': nocodbToken,
        },
      });

      if (!response.ok) {
        this.logger.warn(
          `NocoDB connection test failed: ${response.status} ${response.statusText} (non-blocking)`,
        );
        return false;
      }

      this.logger.log('Successfully connected to NocoDB.');
      return true;
    } catch (error) {
      this.logger.warn(
        `NocoDB connection test failed (non-blocking): ${error instanceof Error ? error.message : String(error)}`,
      );
      return false;
    }
  }

  private async initRedisClient() {
    const host = this.configService.get<string>('REDIS_HOST');
    const port = this.configService.get<number>('REDIS_PORT') || 6379;
    const password = this.configService.get<string>('REDIS_PASSWORD');
    const useTls = this.configService.get('REDIS_TLS') === 'true';

    // Debug logging
    this.logger.log(`Redis config: host=${host}, port=${port}, tls=${useTls}`);

    if (!host) {
      this.logger.warn('REDIS_HOST not configured, skipping Redis initialization');
      return;
    }

    const config: RedisClientOptions = {
      socket: {
        host,
        port,
        connectTimeout: 10000, // 10 second timeout
        ...(useTls && {
          tls: true,
          rejectUnauthorized: false,
        }),
      },
      ...(password && { password }),
    };

    this.redisClient = createClient(config);

    this.redisClient.on('error', (err: Error) => {
      this.logger.error(`Redis client error: ${err.message}`);
    });

    this.redisClient.on('connect', () => {
      this.logger.log('Redis client connecting...');
    });

    this.redisClient.on('ready', () => {
      this.logger.log('Redis client ready!');
    });

    try {
      await this.redisClient.connect();
      this.logger.log('Redis connected successfully');
    } catch (error) {
      this.logger.error(
        `Failed to connect Redis client: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  serverStatus(): string {
    return 'Server is running!';
  }

  async getHealth() {
    const health = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      services: {
        postgres: { status: 'unknown', message: '' },
        redis: { status: 'unknown', message: '' },
        bullmq: { status: 'unknown', message: '' },
        nocodb: { status: 'unknown', message: '' },
      },
    };

    // Check PostgreSQL
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      health.services.postgres.status = 'healthy';
      health.services.postgres.message = 'Connected';
    } catch (error: any) {
      health.status = 'degraded';
      health.services.postgres.status = 'unhealthy';
      health.services.postgres.message =
        error instanceof Error ? error.message : 'Unknown error';
    }

    // Check Redis & BullMQ Queue
    try {
      const queueHealth = await this.submissionsQueue.isReady();
      const jobCounts = await this.submissionsQueue.getJobCounts();

      if (queueHealth) {
        // If BullMQ is ready, Redis is also connected
        health.services.redis.status = 'healthy';
        health.services.redis.message = 'Connected (via BullMQ)';

        health.services.bullmq.status = 'healthy';
        health.services.bullmq.message = `Queue ready (${jobCounts.waiting} waiting, ${jobCounts.active} active)`;
      } else {
        throw new Error('Queue not ready');
      }
    } catch (error: any) {
      health.status = 'degraded';
      health.services.redis.status = 'unhealthy';
      health.services.redis.message =
        error instanceof Error ? error.message : 'Unknown error';
      health.services.bullmq.status = 'unhealthy';
      health.services.bullmq.message =
        error instanceof Error ? error.message : 'Unknown error';
    }

    try {
      const nocodbHealthy = await this.testNocodbConnection();
      if (nocodbHealthy) {
        health.services.nocodb.status = 'healthy';
        health.services.nocodb.message = 'Connected';
      } else {
        throw new Error('NocoDB connection failed');
      }
    } catch (error) {
      health.status = 'degraded';
      health.services.nocodb.status = 'unhealthy';
      health.services.nocodb.message =
        error instanceof Error ? error.message : 'Unknown error';
    }

    return health;
  }

  async onModuleDestroy() {
    if (this.redisClient) {
      await this.redisClient.quit();
    } else {
      this.logger.warn('Redis client was not initialized, nothing to quit.');
    }
  }
}
