import { PartialType } from '@nestjs/mapped-types';
import { CreateCertificateIssuerDto } from './create-certificate_issuers.dto';

export class UpdateCertificateIssuerDto extends PartialType(CreateCertificateIssuerDto) {}
