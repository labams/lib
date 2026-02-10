import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { MESSAGE_MAX_LENGTH } from '../types/message.types';

export class SendMessageDto {
    @ApiProperty({
        description: 'Текст сообщения (максимум 4096 символов)',
        example: 'Здравствуйте, по заказу #123...',
        maxLength: MESSAGE_MAX_LENGTH,
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(MESSAGE_MAX_LENGTH)
    content: string;
}
