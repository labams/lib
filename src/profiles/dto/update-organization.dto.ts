import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateOrganizationDto {
    @ApiPropertyOptional({ description: 'Новое название', maxLength: 255 })
    @IsOptional()
    @IsString()
    @MaxLength(255)
    name?: string;

    @ApiPropertyOptional({ description: 'Описание' })
    @IsOptional()
    @IsString()
    description?: string;

    @ApiPropertyOptional({ description: 'Адрес' })
    @IsOptional()
    @IsString()
    address?: string;

    @ApiPropertyOptional({ description: 'ID файла фото' })
    @IsOptional()
    @IsString()
    photoId?: string;
}
