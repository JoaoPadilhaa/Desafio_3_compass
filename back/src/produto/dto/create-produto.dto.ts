import { IsString, IsNumber, IsInt } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  name: string;

  @IsString()
  peso: string;

  @IsNumber()
  price: number;

  @IsInt()
  fk_tipo_de_produto_id: number;
}
