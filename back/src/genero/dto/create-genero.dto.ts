import { IsString, Length } from 'class-validator';

export class CreateGeneroDto {
    @IsString()
    @Length(1, 1)
    descricao: string;
}