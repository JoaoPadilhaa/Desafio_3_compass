import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CorService } from './cor.service';
import { CorController } from './cor.controller';
import { Cor } from './entities/cor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cor])],
  controllers: [CorController],
  providers: [CorService],
})
export class CorModule {}
