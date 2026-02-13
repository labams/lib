import { ApiProperty } from '@nestjs/swagger';

export class MessageResponseDto {
    @ApiProperty({ description: 'ID сообщения' })
    id: string;

    @ApiProperty({ description: 'ID комнаты' })
    roomId: string;

    @ApiProperty({ description: 'ID отправителя' })
    senderId: string;

    @ApiProperty({ description: 'Содержимое сообщения' })
    content: string;

    @ApiProperty({
        description: 'Список ID пользователей, прочитавших сообщение',
        type: [String],
    })
    readBy: string[];

    @ApiProperty({ description: 'Дата создания' })
    createdAt: Date;
}

export class MessagesListResponseDto {
    @ApiProperty({ type: [MessageResponseDto] })
    messages: MessageResponseDto[];

    @ApiProperty({ description: 'Есть ли ещё сообщения' })
    has_more: boolean;
}
