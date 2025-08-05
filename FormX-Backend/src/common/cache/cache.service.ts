import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from 'redis';
import type { RedisClientOptions, RedisClientType } from 'redis';

@Injectable()
export class CacheService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(CacheService.name);
  private client?: RedisClientType;

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    const host = this.configService.get<string>('REDIS_HOST');
    if (!host) {
      this.logger.warn('REDIS_HOST not configured, response caching disabled');
      return;
    }

    const port = this.configService.get<number>('REDIS_PORT') || 6379;
    const password = this.configService.get<string>('REDIS_PASSWORD');
    const useTls = this.configService.get('REDIS_TLS') === 'true';

    const config: RedisClientOptions = {
      socket: {
        host,
        port,
        connectTimeout: 10000,
        ...(useTls && { tls: true, rejectUnauthorized: false }),
      },
      ...(password && { password }),
    };

    this.client = createClient(config) as RedisClientType;
    this.client.on('error', (err: Error) =>
      this.logger.error(`Cache Redis client error: ${err.message}`),
    );

    try {
      await this.client.connect();
    } catch (error) {
      this.logger.error(
        `Cache Redis client failed to connect: ${error instanceof Error ? error.message : String(error)}`,
      );
      this.client = undefined;
    }
  }

  async onModuleDestroy() {
    if (this.client?.isOpen) {
      await this.client.quit();
    }
  }

  /** Fetch from cache, or compute+store on miss. Fails open (falls back to `compute`) if Redis is unavailable. */
  async wrap<T>(key: string, ttlSeconds: number, compute: () => Promise<T>): Promise<T> {
    if (!this.client?.isOpen) {
      return compute();
    }

    try {
      const cached = await this.client.get(key);
      if (cached !== null) {
        return JSON.parse(cached) as T;
      }
    } catch (error) {
      this.logger.warn(`Cache read failed for ${key}: ${(error as Error).message}`);
    }

    const value = await compute();

    try {
      await this.client.set(key, JSON.stringify(value), { EX: ttlSeconds });
    } catch (error) {
      this.logger.warn(`Cache write failed for ${key}: ${(error as Error).message}`);
    }

    return value;
  }

  async del(key: string): Promise<void> {
    if (!this.client?.isOpen) return;
    try {
      await this.client.del(key);
    } catch (error) {
      this.logger.warn(`Cache delete failed for ${key}: ${(error as Error).message}`);
    }
  }

  /** Bump a per-user version counter, used to cheaply invalidate every cached list-page for that user without a KEYS scan. */
  async bumpVersion(namespace: string): Promise<void> {
    if (!this.client?.isOpen) return;
    try {
      await this.client.incr(`version:${namespace}`);
    } catch (error) {
      this.logger.warn(`Cache version bump failed for ${namespace}: ${(error as Error).message}`);
    }
  }

  async getVersion(namespace: string): Promise<number> {
    if (!this.client?.isOpen) return 0;
    try {
      const v = await this.client.get(`version:${namespace}`);
      return v ? Number(v) : 0;
    } catch {
      return 0;
    }
  }
}
