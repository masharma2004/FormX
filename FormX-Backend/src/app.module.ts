import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { FormsModule } from './forms/forms.module';
import { SheetsModule } from './sheets/sheets.module';
import { ScriptsModule } from './scripts/scripts.module';
import { AuthModule } from './auth/auth.module';
import { BullModule } from '@nestjs/bull';
import { AiModule } from './ai/ai.module';
import { UsersModule } from './users/users.module';
import { CacheModule } from './common/cache/cache.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        redis: {
          host: configService.get<string>('REDIS_HOST'),
          port: configService.get<number>('REDIS_PORT'),
          password: configService.get<string>('REDIS_PASSWORD'),
        },
      }),
    }),
    BullModule.registerQueue({
      name: 'submissions',
    }),
    DatabaseModule,
    CacheModule,
    FormsModule,
    SheetsModule,
    ScriptsModule,
    AuthModule,
    AiModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
