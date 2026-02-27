import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength, IsUUID } from 'class-validator';
import { MESSAGE_MAX_LENGTH } from '../types/message.types';

export class ReplyMessageDto {
    @ApiProperty({
        description: 'Текст ответа (максимум 4096 символов)',
        example: 'Спасибо за информацию!',
        maxLength: MESSAGE_MAX_LENGTH,
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(MESSAGE_MAX_LENGTH)
    content: string;

    @ApiProperty({
        description: 'ID сообщения, на которое отвечают',
        example: '123e4567-e89b-12d3-a456-426614174000',
    })
    @IsString()
    @IsNotEmpty()
    @IsUUID()
    replyToId: string;
}
