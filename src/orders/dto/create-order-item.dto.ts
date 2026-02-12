import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsUUID,
    IsOptional,
    IsString,
    IsInt,
    IsArray,
    Min,
    ArrayMinSize,
} from 'class-validator';

export class CreateOrderItemDto {
    @ApiProperty({ description: 'ID типа конструкции' })
    @IsUUID()
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

    @ApiPropertyOptional({ description: 'Количество единиц', default: 1 })
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
