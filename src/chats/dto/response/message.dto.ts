import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

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

    @ApiPropertyOptional({ description: 'ID сообщения, на которое отвечают' })
    replyToId?: string | null;

    @ApiPropertyOptional({
        description: 'ID оригинального сообщения (при пересылке)',
    })
    forwardedFromId?: string | null;

    @ApiPropertyOptional({ description: 'Дата последнего редактирования' })
    editedAt?: Date | null;

    @ApiPropertyOptional({ description: 'Дата удаления (soft delete)' })
    deletedAt?: Date | null;

    @ApiPropertyOptional({
        description: 'ID пользователя, который удалил сообщение',
    })
    deletedBy?: string | null;

    @ApiProperty({
        description: 'Удалено для всех или только для текущего пользователя',
    })
    deletedForAll: boolean;

    @ApiProperty({ description: 'Дата создания' })
    createdAt: Date;
}

export class MessagesListResponseDto {
    @ApiProperty({ type: [MessageResponseDto] })
    messages: MessageResponseDto[];

    @ApiProperty({ description: 'Есть ли ещё сообщения' })
    has_more: boolean;
}
