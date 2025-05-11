import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoDeProduto } from './entities/tipo-de-produto.entity';
import { CreateTipoDeProdutoDto } from './dto/create-tipo-de-produto.dto';
import { UpdateTipoDeProdutoDto } from './dto/update-tipo-de-produto.dto';

@Injectable()
export class TipoDeProdutoService {
  constructor(
    @InjectRepository(TipoDeProduto)
    private repo: Repository<TipoDeProduto>,
  ) {}

  create(dto: CreateTipoDeProdutoDto) {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) throw new NotFoundException('Tipo de produto não encontrado');
    return entity;
  }

  async update(id: number, dto: UpdateTipoDeProdutoDto) {
    const entity = await this.findOne(id);
    Object.assign(entity, dto);
    return this.repo.save(entity);
  }

  async remove(id: number) {
    const entity = await this.findOne(id);
    return this.repo.remove(entity);
  }
}
