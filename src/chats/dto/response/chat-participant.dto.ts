import { ApiProperty } from '@nestjs/swagger';

export class ChatParticipantResponseDto {
    @ApiProperty({ description: 'ID участника' })
    id: string;

    @ApiProperty({ description: 'ID комнаты' })
    chatRoomId: string;

    @ApiProperty({ description: 'ID пользователя' })
    userId: string;

    @ApiProperty({ description: 'Роль пользователя' })
    role: string;

    @ApiProperty({ description: 'Дата присоединения' })
    joinedAt: Date;

    @ApiProperty({ description: 'Дата последнего прочтения', nullable: true })
    lastReadAt: Date | null;
}
