import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';
import { SubmissionProcessor } from './processors/submission.processor';
import { DatabaseModule } from '../database/database.module';
import { ScriptsModule } from '../scripts/scripts.module';
import { SheetsModule } from '../sheets/sheets.module';

@Module({
  imports: [
    DatabaseModule,
    BullModule.registerQueue({ name: 'submissions' }),
    ScriptsModule,
    SheetsModule,
  ],
  controllers: [FormsController],
  providers: [FormsService, SubmissionProcessor],
  exports: [FormsService],
})
export class FormsModule {}
