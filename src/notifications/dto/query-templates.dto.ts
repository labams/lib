import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum, IsString, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';
import { Channel } from '../types/notification.types';

export class QueryNotificationTemplatesDto {
    @ApiProperty({ required: false, example: 'ORDER_CREATED' })
    @IsOptional()
    @IsString()
    type?: string;

    @ApiProperty({ enum: Channel, required: false, example: 'EMAIL' })
    @IsOptional()
    @IsEnum(Channel)
    channel?: Channel;

    @ApiProperty({ required: false, example: true })
    @IsOptional()
    @Transform(({ value }) => value === 'true' || value === true)
    @IsBoolean()
    isActive?: boolean;
}
