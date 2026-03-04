import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdatePatientDto {
    @ApiPropertyOptional({ description: 'Имя', maxLength: 100 })
    @IsOptional()
    @IsString()
    @MaxLength(100)
    firstName?: string;

    @ApiPropertyOptional({ description: 'Фамилия', maxLength: 100 })
    @IsOptional()
    @IsString()
    @MaxLength(100)
    lastName?: string;

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

    @ApiPropertyOptional({ description: 'Медицинские записи' })
    @IsOptional()
    medicalRecords?: Record<string, unknown>;

    @ApiPropertyOptional({ description: 'Документы' })
    @IsOptional()
    documents?: unknown[];
}
