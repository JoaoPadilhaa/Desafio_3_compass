import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Porte } from './entities/porte.entity';
import { CreatePorteDto } from './dto/create-porte.dto';
import { UpdatePorteDto } from './dto/update-porte.dto';

@Injectable()
export class PorteService {
  constructor(
    @InjectRepository(Porte)
    private readonly porteRepository: Repository<Porte>,
  ) {}

  create(createPorteDto: CreatePorteDto) {
    const porte = this.porteRepository.create(createPorteDto);
    return this.porteRepository.save(porte);
  }

  findAll() {
    return this.porteRepository.find();
  }

  async findOne(id: number) {
    const porte = await this.porteRepository.findOne({ where: { id_porte: id } });
    if (!porte) throw new NotFoundException('Porte não encontrado');
    return porte;
  }

  async update(id: number, updatePorteDto: UpdatePorteDto) {
    const porte = await this.findOne(id);
    Object.assign(porte, updatePorteDto);
    return this.porteRepository.save(porte);
  }

  async remove(id: number) {
    const porte = await this.findOne(id);
    return this.porteRepository.remove(porte);
  }
}
