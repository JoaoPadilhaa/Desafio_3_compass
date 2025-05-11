import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { TipoDeProduto } from 'src/tipo-de-produto/entities/tipo-de-produto.entity';
import { Genero } from 'src/genero/entities/genero.entity';
import { CertificateIssuer } from 'src/certificado_issuers/entities/certificate_issuers.entity'
import { Cor } from 'src/cor/entities/cor.entity'
import { Porte } from 'src/porte/entities/porte.entity'

@Entity('produtos')
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 20 })
  peso: string;

  @Column('decimal', { precision: 18, scale: 0 })
  price: number;

  @ManyToOne(() => TipoDeProduto, { eager: true }) // eager para retornar já com o tipo
  @JoinColumn({ name: 'fk_tipo_de_produto_id' })
  tipoDeProduto: TipoDeProduto;

}
