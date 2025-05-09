import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Cor')
export class Cor {
    @PrimaryGeneratedColumn({ name: 'Id_Cor'})
    id_cor: number;

    @Column({ name: 'nome_cor', length: 18 })
    nome_cor: string;
}