import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class DeleteMessageDto {
    @ApiProperty({
        description:
            'Удалить для всех участников чата (true) или только для себя (false)',
        example: false,
        default: false,
    })
    @IsBoolean()
    deleteForAll: boolean = false;
}
