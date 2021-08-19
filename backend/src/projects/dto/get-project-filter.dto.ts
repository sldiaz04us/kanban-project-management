import { IsOptional, IsString } from 'class-validator';

export class GetProjectFilterDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  key: string;
}
