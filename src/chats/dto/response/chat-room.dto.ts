import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ChatParticipantResponseDto } from './chat-participant.dto';
import { MessageResponseDto } from './message.dto';

export class ChatRoomResponseDto {
    @ApiProperty({ description: 'ID комнаты' })
    id: string;

    @ApiProperty({ description: 'Тип комнаты', enum: ['ORDER', 'SUPPORT'] })
    type: string;

    @ApiProperty({
        description: 'Статус комнаты',
        enum: ['ACTIVE', 'WAITING', 'RESOLVED', 'COMPLETED', 'ARCHIVED', 'CLOSED'],
    })
    status: string;

    @ApiPropertyOptional({
        description: 'ID связанной сущности (order_id и т.д.)',
    })
    relatedEntityId: string | null;

    @ApiPropertyOptional({ description: 'Дата последнего сообщения' })
    lastMessageAt: Date | null;

    @ApiProperty({ description: 'Дата создания' })
    createdAt: Date;

    @ApiProperty({ description: 'Дата обновления' })
    updatedAt: Date;

    @ApiProperty({ type: [ChatParticipantResponseDto] })
    participants: ChatParticipantResponseDto[];
}

export class ChatRoomWithMessagesResponseDto extends ChatRoomResponseDto {
    @ApiProperty({ type: [MessageResponseDto] })
    messages: MessageResponseDto[];
}

export class RoomsListResponseDto {
    @ApiProperty({ type: [ChatRoomWithMessagesResponseDto] })
    rooms: ChatRoomWithMessagesResponseDto[];

    @ApiProperty({ description: 'Общее количество комнат' })
    total: number;
}

export class RoomStatusResponseDto {
    @ApiProperty({
        description: 'Статус комнаты',
        enum: ['ACTIVE', 'WAITING', 'RESOLVED', 'COMPLETED', 'ARCHIVED', 'CLOSED'],
    })
    status: string;

    @ApiProperty({
        description: 'Участники',
        type: 'array',
        items: {
            type: 'object',
            properties: {
                user_id: { type: 'string' },
                role: { type: 'string' },
            },
        },
    })
    participants: { user_id: string; role: string }[];
}

export class SupportRoomCreatedResponseDto {
    @ApiProperty({ description: 'ID созданной комнаты' })
    room_id: string;
}
