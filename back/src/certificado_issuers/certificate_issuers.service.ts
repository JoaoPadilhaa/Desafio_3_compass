import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CertificateIssuer } from './entities/certificate_issuers.entity';
import { CreateCertificateIssuerDto } from './dto/create-certificate_issuers.dto';
import { UpdateCertificateIssuerDto } from './dto/update-certificate_issuers.dto';

@Injectable()
export class CertificateIssuersService {
  constructor(
    @InjectRepository(CertificateIssuer)
    private readonly repo: Repository<CertificateIssuer>,
  ) {}

  create(dto: CreateCertificateIssuerDto) {
    const issuer = this.repo.create(dto);
    return this.repo.save(issuer);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const issuer = await this.repo.findOne({ where: { id } });
    if (!issuer) throw new NotFoundException('Issuer not found');
    return issuer;
  }

  async update(id: number, dto: UpdateCertificateIssuerDto) {
    const issuer = await this.findOne(id);
    Object.assign(issuer, dto);
    return this.repo.save(issuer);
  }

  async remove(id: number) {
    const issuer = await this.findOne(id);
    return this.repo.remove(issuer);
  }
}
