import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe, RequestMethod } from '@nestjs/common';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const request = require('supertest');

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    // Match main.ts config exactly
    app.setGlobalPrefix('api/v1', {
      exclude: [
        { path: '/', method: RequestMethod.GET },
        { path: '/docs', method: RequestMethod.GET },
        { path: '/health', method: RequestMethod.GET },
      ],
    });
    await app.init();
  }, 30000);

  afterAll(async () => {
    if (app) {
      await app.close();
    }
  });

  it('/ (GET) - should return server status', async () => {
    // Root is excluded from prefix, so use / not /api/v1/
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Server is running!');
  });
});
