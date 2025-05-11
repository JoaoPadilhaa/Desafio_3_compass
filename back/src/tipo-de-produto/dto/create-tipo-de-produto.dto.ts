import { IsString, Length } from 'class-validator';

export class CreateTipoDeProdutoDto {
  @IsString()
  @Length(1, 30)
  name: string;
}
