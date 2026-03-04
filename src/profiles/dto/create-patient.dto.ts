import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsDateString,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    MaxLength,
} from 'class-validator';

export class CreatePatientDto {
    @ApiProperty({ description: 'UUID организации' })
    @IsUUID()
    @IsNotEmpty()
    organizationId: string;

    @ApiProperty({ description: 'Имя пациента', maxLength: 100 })
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    firstName: string;

    @ApiProperty({ description: 'Фамилия пациента', maxLength: 100 })
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    lastName: string;

    @ApiPropertyOptional({ description: 'Отчество', maxLength: 100 })
    @IsOptional()
    @IsString()
    @MaxLength(100)
    middleName?: string;

    @ApiPropertyOptional({
        description: 'Дата рождения (ISO 8601)',
        example: '1990-05-20',
    })
    @IsOptional()
    @IsDateString()
    birthDate?: string;

    @ApiPropertyOptional({ description: 'Контакты { phone, email }' })
    @IsOptional()
    contacts?: Record<string, unknown>;

    @ApiPropertyOptional({ description: 'Список аллергий' })
    @IsOptional()
    allergies?: unknown[];

    @ApiPropertyOptional({ description: 'Медицинский анамнез' })
    @IsOptional()
    medicalHistory?: Record<string, unknown>;
}
