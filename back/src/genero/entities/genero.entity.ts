import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('genero')
export class Genero {
  @PrimaryGeneratedColumn({ name: 'id_genero' })
  id: number;

  @Column({ name: 'descricao', type: 'varchar', length: 1 })
  descricao: string;
}
