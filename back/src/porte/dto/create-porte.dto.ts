import { IsOptional, IsString, Length } from 'class-validator';

export class CreatePorteDto {
  @IsOptional()
  @IsString()
  @Length(1, 7)
  nome_porte?: string;
}
