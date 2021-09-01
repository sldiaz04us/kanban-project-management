import { IsOptional, IsString } from 'class-validator';

export class GetCommentFilterDto {
  @IsOptional()
  @IsString()
  issueId: string;
}
