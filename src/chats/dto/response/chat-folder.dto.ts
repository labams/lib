import { ApiProperty } from '@nestjs/swagger';

export class ChatFolderResponseDto {
    @ApiProperty({ description: 'ID папки' })
    id: string;

    @ApiProperty({ description: 'Название папки' })
    name: string;

    @ApiProperty({ description: 'ID владельца' })
    ownerId: string;

    @ApiProperty({ description: 'Дата создания' })
    createdAt: Date;

    @ApiProperty({ description: 'Дата обновления' })
    updatedAt: Date;

    @ApiProperty({
        description: 'ID комнат в папке',
        type: [String],
    })
    roomIds: string[];
}
