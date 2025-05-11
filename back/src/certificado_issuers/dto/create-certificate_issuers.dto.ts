import { IsString, Length } from 'class-validator';

export class CreateCertificateIssuerDto {
  @IsString()
  @Length(1, 30)
  name: string;
}
