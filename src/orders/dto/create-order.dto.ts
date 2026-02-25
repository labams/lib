import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsUUID,
    IsOptional,
    IsArray,
    ValidateNested,
    IsString,
    IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateOrderItemDto } from './create-order-item.dto';

export class CreateOrderDto {
    @ApiProperty({ description: 'ID клиники' })
    @IsUUID()
    clinicId: string;

    @ApiProperty({ description: 'ID доктора' })
    @IsUUID()
    doctorId: string;

    @ApiProperty({ description: 'ID лаборатории' })
    @IsUUID()
    labId: string;

    @ApiPropertyOptional({ description: 'ID пациента' })
    @IsOptional()
    @IsUUID()
    patientId?: string;

    @ApiPropertyOptional({
        description: 'Срочность',
        enum: ['NORMAL', 'URGENT'],
    })
    @IsOptional()
    @IsEnum(['NORMAL', 'URGENT'])
    urgency?: string;

    @ApiPropertyOptional({ description: 'Адрес доставки' })
    @IsOptional()
    @IsString()
    deliveryAddress?: string;

    @ApiPropertyOptional({
        description: 'Позиции заказа',
        type: [CreateOrderItemDto],
    })
    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateOrderItemDto)
    items?: CreateOrderItemDto[];
}
