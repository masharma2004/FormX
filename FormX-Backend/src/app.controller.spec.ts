import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { ConfigService } from '@nestjs/config';
import { getQueueToken } from '@nestjs/bull';

describe('AppController', () => {
  let appController: AppController;

  // Mock PrismaService
  const mockPrismaService = {
    $queryRaw: jest.fn().mockResolvedValue([{ 1: 1 }]),
  };

  // Mock ConfigService
  const mockConfigService = {
    get: jest.fn((key: string) => {
      const config: Record<string, string | undefined> = {
        REDIS_HOST: 'localhost',
        REDIS_PORT: '6379',
        REDIS_PASSWORD: '',
        REDIS_TLS: 'false',
        NOCODB_URL: 'http://localhost:8080',
        NOCODB_TOKEN: 'test-token',
      };
      return config[key];
    }),
  };

  // Mock Bull Queue
  const mockQueue = {
    isReady: jest.fn().mockResolvedValue(true),
    getJobCounts: jest.fn().mockResolvedValue({ waiting: 0, active: 0 }),
  };

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
        {
          provide: getQueueToken('submissions'),
          useValue: mockQueue,
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Server is running!"', () => {
      expect(appController.getServerStatus()).toBe('Server is running!');
    });
  });
});
