import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutosCachorroDto } from './create-produtos-cachorro.dto';

export class UpdateProdutosCachorroDto extends PartialType(CreateProdutosCachorroDto) {}
