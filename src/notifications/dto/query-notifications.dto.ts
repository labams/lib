import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum, IsString, IsInt, Min } from 'class-validator';
import { Transform } from 'class-transformer';
import { Channel, NotificationStatus } from '../types/notification.types';

export class QueryNotificationsDto {
    @ApiProperty({ required: false, example: 'user-id' })
    @IsOptional()
    @IsString()
    userId?: string;

    @ApiProperty({ required: false, example: 'ORDER_CREATED' })
    @IsOptional()
    @IsString()
    type?: string;

    @ApiProperty({ enum: Channel, required: false })
    @IsOptional()
    @IsEnum(Channel)
    channel?: Channel;

    @ApiProperty({ enum: NotificationStatus, required: false })
    @IsOptional()
    @IsEnum(NotificationStatus)
    status?: NotificationStatus;

    @ApiProperty({ required: false, example: 10, default: 20 })
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10))
    @IsInt()
    @Min(1)
    limit?: number;

    @ApiProperty({ required: false, example: 0, default: 0 })
    @IsOptional()
    @Transform(({ value }) => parseInt(value, 10))
    @IsInt()
    @Min(0)
    offset?: number;
}
