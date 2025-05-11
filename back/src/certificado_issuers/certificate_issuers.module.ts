import { Module } from '@nestjs/common';
import { CertificateIssuersService } from './certificate_issuers.service';
import { CertificateIssuersController } from './certificate_issuers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CertificateIssuer } from './entities/certificate_issuers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CertificateIssuer])],
  controllers: [CertificateIssuersController],
  providers: [CertificateIssuersService],
})
export class CertificateIssuersModule {}
