import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
} from 'class-validator';
import { OrganizationType } from '../types/organization.types';

export class CreateOrganizationDto {
    @ApiProperty({
        description: 'Название организации',
        example: 'Клиника "Улыбка"',
        maxLength: 255,
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(255)
    name: string;

    @ApiPropertyOptional({ description: 'Описание организации' })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiProperty({ description: 'Тип организации', enum: OrganizationType })
    @IsEnum(OrganizationType)
    type: OrganizationType;

    @ApiPropertyOptional({ description: 'Адрес организации' })
    @IsOptional()
    @IsString()
    address?: string;
}
