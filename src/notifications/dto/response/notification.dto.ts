import { ApiProperty } from '@nestjs/swagger';
import {
    Channel,
    NotificationStatus,
    NotificationPriority,
} from '../../types/notification.types';

export class NotificationResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    userId: string;

    @ApiProperty()
    type: string;

    @ApiProperty({ enum: Channel })
    channel: Channel;

    @ApiProperty({ enum: NotificationPriority })
    priority: NotificationPriority;

    @ApiProperty({ nullable: true })
    subject: string | null;

    @ApiProperty()
    message: string;

    @ApiProperty({ nullable: true })
    payload: Record<string, unknown> | null;

    @ApiProperty({ enum: NotificationStatus })
    status: NotificationStatus;

    @ApiProperty({ nullable: true })
    error: string | null;

    @ApiProperty({ nullable: true })
    sentAt: string | null;

    @ApiProperty()
    createdAt: string;

    @ApiProperty()
    updatedAt: string;
}
