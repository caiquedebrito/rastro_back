import { IsString, IsDateString, IsOptional, IsInt } from 'class-validator';

export class CreateLoanDto {
  @IsString()
  userId: string;

  @IsString()
  resourceId: string;

  @IsInt()
  quantity: number;

  @IsDateString()
  expectedReturn: string;

  @IsOptional()
  @IsString()
  observations?: string;
}
