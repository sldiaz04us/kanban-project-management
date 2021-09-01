import { IsOptional, IsString } from 'class-validator';

export class GetUserFilterDto {
  @IsOptional()
  @IsString()
  name: string;
}
