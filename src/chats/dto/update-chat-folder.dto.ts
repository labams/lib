import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateChatFolderDto {
    @ApiPropertyOptional({
        description: 'Новое название папки',
        example: 'Архив',
        maxLength: 100,
    })
    @IsOptional()
    @IsString()
    @MaxLength(100)
    name?: string;
}
