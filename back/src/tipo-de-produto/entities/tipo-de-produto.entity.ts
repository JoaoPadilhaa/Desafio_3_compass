import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tipodeproduto')
export class TipoDeProduto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;
}
