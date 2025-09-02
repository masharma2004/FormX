import { IsString, IsNotEmpty, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateScriptDto {
  @ApiProperty({
    description: 'Script name/title',
    example: 'Email Validation Script',
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name!: string;

  @ApiProperty({
    description: 'JavaScript code to execute',
    example: `
// Validate email format and domain
if (context.formData.email) {
  const email = context.formData.email;
  if (!email.endsWith('@company.com')) {
    throw new Error('Only company emails are allowed');
  }
}`,
  })
  @IsString()
  @IsNotEmpty()
  code!: string;

  @ApiProperty({
    description: 'Script description',
    example: 'Validates that submitted emails are from the company domain',
    required: false,
    maxLength: 500,
  })
  @IsString()
  @IsOptional()
  @MaxLength(500)
  description?: string;
}
