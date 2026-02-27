import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';
import { MESSAGE_MAX_LENGTH } from '../types/message.types';

export class EditMessageDto {
    @ApiProperty({
        description: 'Новый текст сообщения (максимум 4096 символов)',
        example: 'Исправленный текст сообщения',
        maxLength: MESSAGE_MAX_LENGTH,
    })
    @IsString()
    @IsNotEmpty()
    @MaxLength(MESSAGE_MAX_LENGTH)
    content: string;
}
