import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, IsUUID } from 'class-validator';

export class ChatFolderRoomsDto {
    @ApiProperty({
        description: 'Массив ID комнат для добавления/удаления из папки',
        example: ['550e8400-e29b-41d4-a716-446655440000'],
        type: [String],
    })
    @IsArray()
    @ArrayNotEmpty()
    @IsUUID('4', { each: true })
    roomIds: string[];
}
