import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { OrderStatus } from '../../types/order.types';
import { ConstructionTypeDto, ReferenceDto } from './reference.dto';

export class OrderItemResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    orderId: string;

    @ApiProperty({ example: 1 })
    positionNumber: number;

    @ApiProperty()
    constructionTypeId: string;

    @ApiPropertyOptional()
    materialId: string | null;

    @ApiPropertyOptional()
    colorId: string | null;

    @ApiPropertyOptional()
    jawId: string | null;

    @ApiPropertyOptional({ description: 'Система имплантов (название)' })
    implantSystem: string | null;

    @ApiProperty({ type: [Number], example: [11, 12, 13] })
    teethNumbers: number[];

    @ApiProperty({ example: 1 })
    unitsCount: number;

    @ApiProperty({ example: '0.00' })
    unitPrice: string;

    @ApiProperty({ example: '0.00' })
    totalPrice: string;

    @ApiPropertyOptional()
    fixationType: string | null;

    @ApiPropertyOptional()
    description: string | null;

    @ApiPropertyOptional({ enum: OrderStatus })
    status: string | null;

    @ApiPropertyOptional()
    rejectionReason: string | null;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;

    @ApiPropertyOptional({ type: () => ConstructionTypeDto })
    constructionType?: ConstructionTypeDto;

    @ApiPropertyOptional({ type: () => ReferenceDto })
    material?: ReferenceDto | null;

    @ApiPropertyOptional({ type: () => ReferenceDto })
    color?: ReferenceDto | null;

    @ApiPropertyOptional({ type: () => ReferenceDto })
    jaw?: ReferenceDto | null;
}
