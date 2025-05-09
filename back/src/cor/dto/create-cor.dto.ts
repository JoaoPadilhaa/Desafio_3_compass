import { IsString, Length } from 'class-validator';

export class CreateCorDto {
  @IsString()
  @Length(1, 18)
  nome_cor: string;
}
