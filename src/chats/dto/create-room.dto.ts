import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsArray,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsString,
    IsUUID,
    MaxLength,
    ValidateNested,
} from 'class-validator';
import { RoomType } from '../types/room.types';

export class CreateRoomParticipantDto {
    @ApiProperty({
        description: 'ID пользователя',
        example: '550e8400-e29b-41d4-a716-446655440000',
    })
    @IsUUID()
    @IsNotEmpty()
    user_id: string;

    @ApiProperty({
        description: 'Роль пользователя (DOCTOR, DL_TECHNICIAN, DL_ADMIN, CLINIC_ADMIN, SUPPORT)',
        example: 'DOCTOR',
    })
    @IsString()
    @IsNotEmpty()
    role: string;
}

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

    @ApiProperty({
        description: 'Список участников чата',
        type: [CreateRoomParticipantDto],
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateRoomParticipantDto)
    participants: CreateRoomParticipantDto[];

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
