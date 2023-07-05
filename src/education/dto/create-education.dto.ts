import { IsDate, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateEducationDto {
  @IsNotEmpty()
  title: string;
  @IsOptional()
  description: string;
  @IsOptional()
  placeOfEducation: string;
  @IsOptional()
  @IsDate()
  start: Date;
  @IsOptional()
  @IsDate()
  end: Date;
}
