import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Importando os módulos necessários
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// Importando a entidade Cor e o módulo correspondente
import { Cor } from './cor/entities/cor.entity';  // Ajuste o caminho conforme necessário
import { CorModule } from './cor/cor.module';  // Ajuste o caminho conforme necessário

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
      entities: [Cor], // Entidade Cor a ser utilizada
      synchronize: false, // Evitar sincronização automática em produção
      options: {
        encrypt: false, // Habilitar criptografia em produção (recomendado)
        enableArithAbort: true, // Recomendado para SQL Server
      },
    }),

    // Registrando a entidade Cor com o TypeORM
    TypeOrmModule.forFeature([Cor]),

    // Módulo de Cor
    CorModule,  // Certifique-se de que o módulo CorModule está corretamente implementado
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
