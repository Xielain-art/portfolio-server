import { IsNotEmpty } from 'class-validator';

export class CreateSkillDto {
  title: string;
  @IsNotEmpty()
  description: string;
}
