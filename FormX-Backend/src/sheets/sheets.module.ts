import { Module } from '@nestjs/common';
import { SheetsService } from './sheets.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [SheetsService],
  exports: [SheetsService],
})
export class SheetsModule {}
