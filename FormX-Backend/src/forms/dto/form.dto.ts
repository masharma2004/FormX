import {
  IsString,
  IsOptional,
  IsBoolean,
  IsObject,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import type { FormSchema } from '../../common/types/forms.types';

export class CreateFormDto {
  @ApiProperty({
    description: 'Form title',
    example: 'Customer Feedback Survey',
  })
  @IsString()
  @IsNotEmpty()
  title!: string;

  @ApiPropertyOptional({ description: 'Form description' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Form field definitions' })
  @IsObject()
  schema!: FormSchema;

  @ApiPropertyOptional({ description: 'Styling, validation rules, auth settings' })
  @IsOptional()
  @IsObject()
  settings?: Record<string, unknown>;

  @ApiPropertyOptional({ description: 'Whether the form is publicly accessible' })
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;

  @ApiPropertyOptional({ description: 'Whether the form is accepting submissions' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class UpdateFormDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsObject()
  schema?: FormSchema;

  @ApiPropertyOptional()
  @IsOptional()
  @IsObject()
  settings?: Record<string, unknown>;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isPublic?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class SubmitFormDto {
  @ApiProperty({ description: 'Form submission data keyed by field id/name' })
  @IsObject()
  data!: Record<string, unknown>;

  @ApiPropertyOptional({ description: 'Additional metadata about the submission' })
  @IsOptional()
  @IsObject()
  metadata?: Record<string, unknown>;
}
