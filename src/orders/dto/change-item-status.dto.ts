import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ORDER_ITEM_STATUSES } from '../types/order.types';

export class ChangeItemStatusDto {
    @ApiProperty({
        description: 'Новый статус позиции',
        enum: ['IN_PROGRESS', 'READY_FOR_SHIPMENT', 'COMPLETED', 'REJECTED'],
    })
    @IsEnum(ORDER_ITEM_STATUSES)
    newStatus: string;

    @ApiPropertyOptional({ description: 'Комментарий' })
    @IsOptional()
    @IsString()
    comment?: string;
}
