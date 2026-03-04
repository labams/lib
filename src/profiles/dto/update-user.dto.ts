import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateUserDto {
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

    @ApiPropertyOptional({ description: 'ID файла фото' })
    @IsOptional()
    @IsString()
    photoId?: string;
}
