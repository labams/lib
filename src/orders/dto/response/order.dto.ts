import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { OrderStatus, Urgency } from '../../types/order.types';
import { OrderItemResponseDto } from './order-item.dto';
import { OrderFileResponseDto } from './order-file.dto';
import { OrderHistoryResponseDto } from './order-history.dto';

export class OrderResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    clinicId: string;

    @ApiProperty()
    doctorId: string;

    @ApiPropertyOptional()
    patientId: string | null;

    @ApiProperty()
    labId: string;

    @ApiPropertyOptional()
    technicianId: string | null;

    @ApiProperty({ enum: OrderStatus })
    status: string;

    @ApiProperty({ enum: Urgency })
    urgency: string;

    @ApiPropertyOptional()
    deliveryAddress: string | null;

    @ApiPropertyOptional({ example: '1500.00' })
    totalCost: string | null;

    @ApiPropertyOptional()
    rejectionReason: string | null;

    @ApiPropertyOptional({ example: 4 })
    qualityRating: number | null;

    @ApiPropertyOptional()
    overallComment: string | null;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiPropertyOptional({ type: () => [OrderItemResponseDto] })
    items?: OrderItemResponseDto[];

    @ApiPropertyOptional({ type: () => [OrderFileResponseDto] })
    files?: OrderFileResponseDto[];

    @ApiPropertyOptional({ type: () => [OrderHistoryResponseDto] })
    history?: OrderHistoryResponseDto[];
}

export class OrderListResponseDto {
    @ApiProperty({ type: () => [OrderResponseDto] })
    orders: OrderResponseDto[];

    @ApiProperty({ example: 42 })
    total: number;
}
