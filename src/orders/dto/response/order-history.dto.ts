import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { OrderStatus } from '../../types/order.types';

export class OrderHistoryResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    orderId: string;

    @ApiPropertyOptional()
    orderItemId: string | null;

    @ApiProperty({ enum: OrderStatus })
    statusFrom: string;

    @ApiProperty({ enum: OrderStatus })
    statusTo: string;

    @ApiProperty()
    changedBy: string;

    @ApiPropertyOptional()
    comment: string | null;

    @ApiProperty()
    timestamp: Date;
}
