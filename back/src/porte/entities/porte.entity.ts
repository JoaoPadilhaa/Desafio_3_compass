import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('porte')
export class Porte {
  @PrimaryGeneratedColumn()
  id_porte: number;

  @Column({ type: 'varchar', length: 7, nullable: true })
  nome_porte?: string;
}
