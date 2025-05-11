import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CertificateIssuersService } from './certificate_issuers.service';
import { CreateCertificateIssuerDto } from './dto/create-certificate_issuers.dto';
import { UpdateCertificateIssuerDto } from './dto/update-certificate_issuers.dto';

@Controller('certificate-issuers')
export class CertificateIssuersController {
  constructor(private readonly service: CertificateIssuersService) {}

  @Post()
  create(@Body() dto: CreateCertificateIssuerDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCertificateIssuerDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
