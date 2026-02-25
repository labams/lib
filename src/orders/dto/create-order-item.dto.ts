import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsUUID,
    IsOptional,
    IsString,
    IsInt,
    IsArray,
    Min,
    ArrayMinSize,
    IsNumber,
} from 'class-validator';

export class CreateOrderItemDto {
    @ApiProperty({ description: 'Номер позиции' })
    @IsInt()
    @Min(1)
    positionNumber: number;

    @ApiProperty({ description: 'ID типа конструкции' })
    @IsString()
    constructionTypeId: string;

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

    @ApiPropertyOptional({ description: 'Система имплантов' })
    @IsOptional()
    @IsString()
    implantSystem?: string;

    @ApiProperty({ description: 'Номера зубов', type: [Number] })
    @IsArray()
    @ArrayMinSize(1)
    @IsInt({ each: true })
    teethNumbers: number[];

    @ApiProperty({ description: 'Количество единиц', default: 1 })
    @IsInt()
    @Min(1)
    unitsCount: number;

    @ApiProperty({ description: 'Цена за единицу' })
    @IsNumber()
    @Min(0)
    unitPrice: number;

    @ApiPropertyOptional({ description: 'Тип фиксации' })
    @IsOptional()
    @IsString()
    fixationType?: string;

    @ApiPropertyOptional({ description: 'Описание' })
    @IsOptional()
    @IsString()
    description?: string;
}
