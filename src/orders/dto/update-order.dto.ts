import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsEnum, IsString } from 'class-validator';
import { Urgency } from '../types/order.types';

export class UpdateOrderDto {
    @ApiPropertyOptional({ enum: Urgency })
    @IsOptional()
    @IsEnum(Urgency)
    urgency?: Urgency;

    @ApiPropertyOptional({ description: 'Адрес доставки' })
    @IsOptional()
    @IsString()
    deliveryAddress?: string;
}
