import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genero } from './entities/genero.entity';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';

@Injectable()
export class GeneroService {
  constructor(
    @InjectRepository(Genero)
    private readonly generoRepository: Repository<Genero>,
  ) {}

  create(dto: CreateGeneroDto) {
    const genero = this.generoRepository.create(dto);
    return this.generoRepository.save(genero);
  }

  findAll() {
    return this.generoRepository.find();
  }

  findOne(id: number) {
    return this.generoRepository.findOneBy({ id });
  }

  async update(id: number, dto: UpdateGeneroDto) {
    const genero = await this.generoRepository.preload({ id, ...dto });
    if (!genero) throw new NotFoundException('Gênero não encontrado');
    return this.generoRepository.save(genero);
  }

  async remove(id: number) {
  const genero = await this.findOne(id);
  if (!genero) {
    throw new NotFoundException('Gênero não encontrado');
  }

  try {
    // Remove o gênero e retorna a confirmação
    await this.generoRepository.remove(genero);
    return { message: 'Gênero removido com sucesso' };
  } catch (error) {
    // Se houver algum erro ao tentar excluir, lança uma exceção detalhada
    throw new Error(`Erro ao tentar remover o gênero: ${error.message}`);
  }
}
}
