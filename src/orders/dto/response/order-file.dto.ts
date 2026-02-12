import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { FileType } from '../../types/order.types';

export class OrderFileResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    orderId: string;

    @ApiPropertyOptional()
    orderItemId: string | null;

    @ApiProperty()
    fileId: string;

    @ApiProperty({ enum: FileType })
    type: string;

    @ApiProperty()
    uploadedAt: Date;
}
