import { Module } from '@nestjs/common';
import { TipoDeProdutoService } from './tipo-de-produto.service';
import { TipoDeProdutoController } from './tipo-de-produto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDeProduto } from './entities/tipo-de-produto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoDeProduto])],
  controllers: [TipoDeProdutoController],
  providers: [TipoDeProdutoService],
})
export class TipoDeProdutoModule {}
