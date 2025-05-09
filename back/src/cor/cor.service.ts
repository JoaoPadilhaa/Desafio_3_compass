import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cor } from './entities/cor.entity';
import { CreateCorDto } from './dto/create-cor.dto';
import { UpdateCorDto } from './dto/update-cor.dto';

@Injectable()
export class CorService {
  constructor(
    @InjectRepository(Cor)
    private readonly corRepository: Repository<Cor>,
  ) {}

  create(createCorDto: CreateCorDto) {
    return this.corRepository.save(createCorDto);
  }

  findAll() {
    return this.corRepository.find();
  }

  findOne(id: number) {
    return this.corRepository.findOneBy({ id_cor: id });
  }

  update(id: number, updateCorDto: UpdateCorDto) {
    return this.corRepository.update(id, updateCorDto);
  }

  remove(id: number) {
    return this.corRepository.delete(id);
  }
}
