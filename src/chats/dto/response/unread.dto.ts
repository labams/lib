import { ApiProperty } from '@nestjs/swagger';

export class UnreadCountResponseDto {
    @ApiProperty({ description: 'Общее количество непрочитанных' })
    total: number;

    @ApiProperty({
        description: 'Количество непрочитанных по комнатам',
        type: 'object',
        additionalProperties: { type: 'number' },
        example: { 'room-uuid-1': 3, 'room-uuid-2': 1 },
    })
    by_room: Record<string, number>;
}

export class ReadAllResponseDto {
    @ApiProperty({ description: 'Количество отмеченных прочитанными' })
    marked_count: number;
}
