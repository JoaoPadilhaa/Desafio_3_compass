import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { TipoDeProduto } from 'src/tipo-de-produto/entities/tipo-de-produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private repo: Repository<Produto>,
    @InjectRepository(TipoDeProduto)
    private tipoRepo: Repository<TipoDeProduto>
  ) {}

  async create(dto: CreateProdutoDto) {
    const tipo = await this.tipoRepo.findOneBy({ id: dto.fk_tipo_de_produto_id });
    if (!tipo) throw new NotFoundException('Tipo de produto não encontrado');

    const produto = this.repo.create({ ...dto, tipoDeProduto: tipo });
    return this.repo.save(produto);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const item = await this.repo.findOne({ where: { id } });
    if (!item) throw new NotFoundException('Produto não encontrado');
    return item;
  }

  async update(id: number, dto: UpdateProdutoDto) {
    const produto = await this.findOne(id);
    if (dto.fk_tipo_de_produto_id) {
      const tipo = await this.tipoRepo.findOneBy({ id: dto.fk_tipo_de_produto_id });
      if (!tipo) throw new NotFoundException('Tipo de produto não encontrado');
      produto.tipoDeProduto = tipo;
    }
    Object.assign(produto, dto);
    return this.repo.save(produto);
  }

  async remove(id: number) {
    const produto = await this.findOne(id);
    return this.repo.remove(produto);
  }
}
