import { ApiProperty } from '@nestjs/swagger';
import { Channel } from '../../types/notification.types';

export class NotificationTemplateResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    type: string;

    @ApiProperty({ enum: Channel })
    channel: Channel;

    @ApiProperty({ nullable: true })
    subject: string | null;

    @ApiProperty()
    body: string;

    @ApiProperty({ nullable: true, type: [String] })
    variables: string[] | null;

    @ApiProperty()
    isActive: boolean;

    @ApiProperty()
    createdAt: string;

    @ApiProperty()
    updatedAt: string;
}
