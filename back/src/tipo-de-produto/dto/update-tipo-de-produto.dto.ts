import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoDeProdutoDto } from './create-tipo-de-produto.dto';

export class UpdateTipoDeProdutoDto extends PartialType(CreateTipoDeProdutoDto) {}
