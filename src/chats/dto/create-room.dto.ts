import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    MaxLength,
} from 'class-validator';
import { RoomType } from '../types/room.types';

export class CreateRoomDto {
    @ApiProperty({
        description: 'Тип комнаты',
        enum: RoomType,
        example: RoomType.ORDER,
    })
    @IsEnum(RoomType)
    @IsNotEmpty()
    type: RoomType;

    @ApiPropertyOptional({
        description: 'ID связанной сущности (order_id или support_ticket_id)',
        example: '550e8400-e29b-41d4-a716-446655440000',
    })
    @IsOptional()
    @IsUUID()
    related_entity_id?: string;

    @ApiPropertyOptional({
        description:
            'ID второго участника (order — техник, support — оператор)',
        example: '550e8400-e29b-41d4-a716-446655440001',
    })
    @IsOptional()
    @IsUUID()
    participant_id?: string;

    @ApiPropertyOptional({
        description: 'Описание обращения (для type=SUPPORT)',
        example: 'Не могу загрузить файл в заказ',
        maxLength: 4096,
    })
    @IsOptional()
    @IsString()
    @MaxLength(4096)
    description?: string;
}
