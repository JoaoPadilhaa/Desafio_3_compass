import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('certificate_issuers')
export class CertificateIssuer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  name: string;
}
