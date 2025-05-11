import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { TipoDeProduto } from 'src/tipo-de-produto/entities/tipo-de-produto.entity';
import { Porte } from 'src/porte/entities/porte.entity';
import { Cor } from 'src/cor/entities/cor.entity';
import { Genero } from 'src/genero/entities/genero.entity';
import { CertificateIssuer } from 'src/certificado_issuers/entities/certificate_issuers.entity';

@Entity('Produtos_cachorro')
export class ProdutosCachorro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column()
  sku: string;

  @Column()
  age: number;

  @Column('decimal')
  price: number;

  @Column()
  vaccinated: boolean;

  @Column()
  dewormed: boolean;

  @Column()
  has_certificate: boolean;

  @Column()
  microchip: boolean;

  @Column()
  location: string;

  @Column()
  published_date: Date;

  @Column()
  DescricaoAdicional: string;

  // 🔑 Chaves estrangeiras explícitas (acesso direto ao ID)
  @Column()
  fk_id_genero: number;

  @Column()
  fk_id_certificate_issuers: number;

  @Column()
  fk_id_cor: number;

  @Column()
  fk_id_porte: number;

  // 🔗 Relacionamentos
  @ManyToOne(() => Genero, { nullable: false })
  @JoinColumn({ name: 'fk_id_genero' })
  genero: Genero;

  @ManyToOne(() => CertificateIssuer)
  @JoinColumn({ name: 'fk_id_certificate_issuers' })
  certificado: CertificateIssuer;

  @ManyToOne(() => Cor)
  @JoinColumn({ name: 'fk_id_cor' })
  cor: Cor;

  @ManyToOne(() => Porte)
  @JoinColumn({ name: 'fk_id_porte' })
  porte: Porte;
}
