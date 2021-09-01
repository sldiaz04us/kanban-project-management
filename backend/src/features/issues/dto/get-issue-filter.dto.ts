import { IsOptional, IsString } from 'class-validator';

export class GetIssueFilterDto {
  @IsOptional()
  @IsString()
  projectId: string;
}
