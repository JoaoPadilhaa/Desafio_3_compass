import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './entities/produto.entity';
import { TipoDeProduto } from 'src/tipo-de-produto/entities/tipo-de-produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Produto, TipoDeProduto])],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class ProdutoModule {}
