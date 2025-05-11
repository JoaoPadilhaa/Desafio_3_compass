import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Importando os módulos necessários
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// Importando a entidade Cor e o módulo correspondente
import { Cor } from './cor/entities/cor.entity';  
import { CorModule } from './cor/cor.module';  

// Importando a entidade Genero
import { Genero } from './genero/entities/genero.entity';  
import { GeneroModule } from './genero/genero.module';  // Certifique-se de que o módulo Genero está implementado corretamente

import { Porte } from './porte/entities/porte.entity';
import { PorteModule } from './porte/porte.modules';

import { CertificateIssuer } from './certificado_issuers/entities/certificate_issuers.entity';
import { CertificateIssuersModule } from './certificado_issuers/certificate_issuers.module';

import { TipoDeProduto } from './tipo-de-produto/entities/tipo-de-produto.entity';
import { TipoDeProdutoModule } from './tipo-de-produto/tipo-de-produto.module';

import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';

import { ProdutosCachorro } from './produtos_cachorro/entities/produtos-cachorro.entity';
import { ProdutosCachorroModule } from './produtos_cachorro/produtos-cachorro.module';

@Module({
  imports: [
    // Configuração global para carregar variáveis de ambiente
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // Arquivo de variáveis de ambiente
    }),

    // Configuração do TypeORM para conectar ao SQL Server
    TypeOrmModule.forRoot({
      type: 'mssql', // Tipo de banco de dados (SQL Server)
      host: process.env.DB_HOST, // Host do banco de dados
      port: parseInt(process.env.DB_PORT || '1433'), // Porta do SQL Server
      username: process.env.DB_USERNAME, // Nome de usuário do banco de dados
      password: process.env.DB_PASSWORD, // Senha do banco de dados
      database: process.env.DB_NAME, // Nome do banco de dados
      entities: [Cor, Genero, Porte, CertificateIssuer, TipoDeProduto, Produto, ProdutosCachorro], // Adicione a entidade Genero aqui
      synchronize: false, // Evitar sincronização automática em produção
      options: {
        encrypt: false, // Habilitar criptografia em produção (recomendado)
        enableArithAbort: true, // Recomendado para SQL Server
      },
    }),

    // Registrando as entidades com o TypeORM
    TypeOrmModule.forFeature([Cor, Genero, Porte, CertificateIssuer, TipoDeProduto, Produto, ProdutosCachorro]), // Adicione a entidade Genero aqui

    // Módulo de Cor
    CorModule,  

    // Módulo de Genero
    GeneroModule,  // Certifique-se de que o módulo GeneroModule está implementado corretamente

    PorteModule,

    CertificateIssuersModule,

    TipoDeProdutoModule,

    ProdutoModule,

    ProdutosCachorroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
