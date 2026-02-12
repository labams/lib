import { ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsOptional,
    IsEnum,
    IsUUID,
    IsDate,
    IsInt,
    Min,
    Max,
} from 'class-validator';
import { Type } from 'class-transformer';
import { OrderStatus } from '../types/order.types';

export class GetOrdersQueryDto {
    @ApiPropertyOptional({ enum: OrderStatus })
    @IsOptional()
    @IsEnum(OrderStatus)
    status?: OrderStatus;

    @ApiPropertyOptional({ description: 'Дата от (ISO)' })
    @IsOptional()
    @Type(() => Date)
    @IsDate()
    fromDate?: Date;

    @ApiPropertyOptional({ description: 'Дата до (ISO)' })
    @IsOptional()
    @Type(() => Date)
    @IsDate()
    toDate?: Date;

    @ApiPropertyOptional({ description: 'ID лаборатории' })
    @IsOptional()
    @IsUUID()
    labId?: string;

    @ApiPropertyOptional({ default: 1 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page?: number;

    @ApiPropertyOptional({ default: 20 })
    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(100)
    limit?: number;
}
