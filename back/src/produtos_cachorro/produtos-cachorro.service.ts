import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProdutosCachorro } from './entities/produtos-cachorro.entity';
import { CreateProdutosCachorroDto } from './dto/create-produtos-cachorro.dto';
import { UpdateProdutosCachorroDto } from './dto/update-produtos-cachorro.dto';
import { Genero } from 'src/genero/entities/genero.entity';
import { CertificateIssuer } from 'src/certificado_issuers/entities/certificate_issuers.entity';
import { Cor } from 'src/cor/entities/cor.entity';
import { Porte } from 'src/porte/entities/porte.entity';
import { Produto } from 'src/produto/entities/produto.entity';

@Injectable()
export class ProdutosCachorroService {
  constructor(
  @InjectRepository(ProdutosCachorro)
  private readonly produtosCachorroRepo: Repository<ProdutosCachorro>,

) {}

  async create(dto: CreateProdutosCachorroDto) {
    const dog = await this.produtosCachorroRepo.create(dto);
    return this.produtosCachorroRepo.save(dog);
  }

  findAll(){
    return this.produtosCachorroRepo.find();
  }

  async findOne(id:number) {
    const item = await this.produtosCachorroRepo.findOne({ where: { id } });
    if (!item) throw new NotFoundException('Produto não encontrado');
    return item;
  }

  async update(id:number, dto: UpdateProdutosCachorroDto) {
    return this.produtosCachorroRepo.update(id, dto);
   
  }

  async remove(id: number) {
    const dog = await this.findOne(id);
    return this.produtosCachorroRepo.remove(dog );
  }

}
