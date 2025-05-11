import { Module } from '@nestjs/common';
import { PorteService } from './porte.service';
import { PorteController } from './porte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Porte } from './entities/porte.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Porte])],
  controllers: [PorteController],
  providers: [PorteService],
})
export class PorteModule {}
