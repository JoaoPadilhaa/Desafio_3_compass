import { IsInt, IsString, IsBoolean, IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProdutosCachorroDto {
  @IsString()
  name: string;

  @IsString()
  sku: string;

  @IsInt()
  @IsNotEmpty()
  fk_id_genero: number;

  @IsInt()
  age: number;

  @IsNumber()
  price: number;

  @IsBoolean()
  vaccinated: boolean;

  @IsBoolean()
  dewormed: boolean;

  @IsBoolean()
  has_certificate: boolean;

  @IsBoolean()
  microchip: boolean;

  @IsInt()
  @IsNotEmpty()
  fk_id_certificate_issuers: number;

  @IsString()
  location: string;

  @IsDateString()
  published_date: string;

  @IsInt()
  @IsNotEmpty()
  fk_id_cor: number;

  @IsInt()
  @IsNotEmpty()
  fk_id_porte: number;

  @IsString()
  DescricaoAdicional: string;
  
}
