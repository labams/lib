import { ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsOptional,
    IsUUID,
    IsString,
    IsInt,
    IsArray,
    Min,
} from 'class-validator';

export class UpdateOrderItemDto {
    @ApiPropertyOptional({ description: 'ID материала' })
    @IsOptional()
    @IsUUID()
    materialId?: string;

    @ApiPropertyOptional({ description: 'ID цвета' })
    @IsOptional()
    @IsUUID()
    colorId?: string;

    @ApiPropertyOptional({ description: 'ID челюсти' })
    @IsOptional()
    @IsUUID()
    jawId?: string;

    @ApiPropertyOptional({ description: 'Система имплантов (название)' })
    @IsOptional()
    @IsString()
    implantSystem?: string;

    @ApiPropertyOptional({ description: 'Номера зубов', type: [Number] })
    @IsOptional()
    @IsArray()
    @IsInt({ each: true })
    teethNumbers?: number[];

    @ApiPropertyOptional({ description: 'Количество единиц' })
    @IsOptional()
    @IsInt()
    @Min(1)
    unitsCount?: number;

    @ApiPropertyOptional({ description: 'Тип фиксации' })
    @IsOptional()
    @IsString()
    fixationType?: string;

    @ApiPropertyOptional({ description: 'Описание' })
    @IsOptional()
    @IsString()
    description?: string;
}
