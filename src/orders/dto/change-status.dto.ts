import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { OrderStatus } from '../types/order.types';

export class ChangeStatusDto {
    @ApiProperty({
        description: 'Новый статус',
        enum: OrderStatus,
    })
    @IsEnum(OrderStatus)
    newStatus: OrderStatus;

    @ApiPropertyOptional({ description: 'Комментарий' })
    @IsOptional()
    @IsString()
    comment?: string;
}
