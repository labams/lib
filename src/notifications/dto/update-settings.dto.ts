import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean,
    IsOptional,
    IsInt,
    Min,
    Max,
    IsString,
} from 'class-validator';

export class UpdateNotificationSettingsDto {
    @ApiProperty({ example: true, required: false })
    @IsOptional()
    @IsBoolean()
    emailEnabled?: boolean;

    @ApiProperty({ example: true, required: false })
    @IsOptional()
    @IsBoolean()
    smsEnabled?: boolean;

    @ApiProperty({ example: true, required: false })
    @IsOptional()
    @IsBoolean()
    telegramEnabled?: boolean;

    @ApiProperty({ example: true, required: false })
    @IsOptional()
    @IsBoolean()
    pushEnabled?: boolean;

    @ApiProperty({
        example: 22,
        required: false,
        description: 'Quiet hours start (0-23)',
    })
    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(23)
    quietHoursStart?: number;

    @ApiProperty({
        example: 8,
        required: false,
        description: 'Quiet hours end (0-23)',
    })
    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(23)
    quietHoursEnd?: number;

    @ApiProperty({ example: 'Europe/Moscow', required: false })
    @IsOptional()
    @IsString()
    timezone?: string;
}
