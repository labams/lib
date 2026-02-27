import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class ForwardMessageDto {
    @ApiProperty({
        description: 'ID сообщения, которое нужно переслать',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    messageId: string;

    @ApiProperty({
        description: 'ID комнаты, в которую нужно переслать сообщение',
        example: '123e4567-e89b-12d3-a456-426614174001',
    })
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    targetRoomId: string;
}
