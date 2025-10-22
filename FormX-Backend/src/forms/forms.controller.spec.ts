import { ExecutionContext, INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';
import { SheetsService } from '../sheets/sheets.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { OptionalAuthGuard } from '../auth/guards/optional-auth.guard';

describe('FormsController routing', () => {
  let app: INestApplication;
  const formsService = {
    getMySubmissions: jest.fn().mockResolvedValue([{ id: 's1' }]),
    findOne: jest.fn().mockResolvedValue({ id: 'form-1' }),
  };

  beforeAll(async () => {
    const allow = {
      canActivate: (ctx: ExecutionContext) => {
        ctx.switchToHttp().getRequest().user = { id: 'u1' };
        return true;
      },
    };
    const moduleRef = await Test.createTestingModule({
      controllers: [FormsController],
      providers: [
        { provide: FormsService, useValue: formsService },
        { provide: SheetsService, useValue: {} },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue(allow)
      .overrideGuard(OptionalAuthGuard)
      .useValue(allow)
      .compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(() => app.close());

  it('GET /forms/my-submissions is not captured by GET /forms/:id', async () => {
    const res = await request(app.getHttpServer()).get('/forms/my-submissions');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: 's1' }]);
    expect(formsService.getMySubmissions).toHaveBeenCalledWith('u1', undefined);
    expect(formsService.findOne).not.toHaveBeenCalled();
  });
});
