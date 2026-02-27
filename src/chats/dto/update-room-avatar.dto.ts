import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, MaxLength, Matches } from 'class-validator';

export class UpdateRoomAvatarDto {
    @ApiPropertyOptional({
        description: 'URL изображения аватара (максимум 512 символов)',
        example: 'https://example.com/avatars/room123.jpg',
        maxLength: 512,
    })
    @IsString()
    @IsOptional()
    @MaxLength(512)
    avatarUrl?: string;

    @ApiPropertyOptional({
        description: 'Цвет аватара в формате HEX (#RRGGBB)',
        example: '#3B82F6',
        pattern: '^#[0-9A-Fa-f]{6}$',
    })
    @IsString()
    @IsOptional()
    @Matches(/^#[0-9A-Fa-f]{6}$/, {
        message: 'avatarColor must be a valid HEX color (#RRGGBB)',
    })
    avatarColor?: string;
}
