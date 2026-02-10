import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { RoomType } from '../types/room.types';

export class GetRoomsQueryDto {
    @ApiPropertyOptional({
        description: 'Фильтр по типу комнаты',
        enum: RoomType,
    })
    @IsOptional()
    @IsEnum(RoomType)
    type?: RoomType;

    @ApiPropertyOptional({
        description: 'Количество записей',
        default: 20,
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(100)
    limit?: number = 20;

    @ApiPropertyOptional({
        description: 'Смещение для пагинации',
        default: 0,
    })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(0)
    offset?: number = 0;
}
