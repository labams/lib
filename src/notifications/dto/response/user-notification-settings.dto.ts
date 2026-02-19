import { ApiProperty } from '@nestjs/swagger';

export class UserNotificationSettingsResponseDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    userId: string;

    @ApiProperty({ nullable: true })
    email: string | null;

    @ApiProperty({ nullable: true })
    phone: string | null;

    @ApiProperty({ nullable: true })
    telegramChatId: string | null;

    @ApiProperty()
    emailEnabled: boolean;

    @ApiProperty()
    smsEnabled: boolean;

    @ApiProperty()
    telegramEnabled: boolean;

    @ApiProperty()
    pushEnabled: boolean;

    @ApiProperty({ nullable: true })
    quietHoursStart: number | null;

    @ApiProperty({ nullable: true })
    quietHoursEnd: number | null;

    @ApiProperty({ nullable: true })
    timezone: string | null;

    @ApiProperty()
    createdAt: string;

    @ApiProperty()
    updatedAt: string;
}
