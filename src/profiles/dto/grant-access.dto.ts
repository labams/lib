import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class GrantAccessDto {
    @ApiProperty({ description: 'ID пользователя (доктора)' })
    @IsUUID()
    userId: string;
}
