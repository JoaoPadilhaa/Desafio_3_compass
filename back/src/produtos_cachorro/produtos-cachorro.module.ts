import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProdutosCachorro } from './entities/produtos-cachorro.entity';
import { Produto } from '../produto/entities/produto.entity';
import { Genero } from '../genero/entities/genero.entity'; // <- importa a entidade
import { CertificateIssuer } from 'src/certificado_issuers/entities/certificate_issuers.entity';
import { Cor } from '../cor/entities/cor.entity';
import { Porte } from '../porte/entities/porte.entity';

import { ProdutosCachorroService } from './produtos-cachorro.service';
import { ProdutosCachorroController } from './produtos-cachorro.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProdutosCachorro,
      Produto,
      Genero, // <- adiciona aqui
      CertificateIssuer,
      Cor,
      Porte,
    ]),
  ],
  controllers: [ProdutosCachorroController],
  providers: [ProdutosCachorroService],
})
export class ProdutosCachorroModule {}
