import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateCrmLinkDto {
    @ApiProperty({ description: 'ID CRM-системы', example: 'dental_crm' })
    @IsString()
    @IsNotEmpty()
    crmId: string;

    @ApiProperty({ description: 'Название CRM', example: 'DentalCRM' })
    @IsString()
    @IsNotEmpty()
    crmName: string;

    @ApiProperty({
        description: 'ID пациента в CRM',
        example: 'crm-patient-123',
    })
    @IsString()
    @IsNotEmpty()
    crmUserId: string;
}

export class SearchByCrmQueryDto {
    @ApiProperty({ description: 'ID CRM-системы' })
    @IsString()
    @IsNotEmpty()
    crmId: string;

    @ApiPropertyOptional({ description: 'ID пациента в CRM' })
    @IsOptional()
    @IsString()
    crmUserId?: string;
}
