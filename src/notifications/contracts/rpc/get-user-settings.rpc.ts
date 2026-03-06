import type { UserNotificationSettingsResponseDto } from '../../dto/response/user-notification-settings.dto';

export interface GetUserSettingsRequest {
    userId: string;
}

export interface GetUserSettingsResponse {
    success: boolean;
    data?: UserNotificationSettingsResponseDto;
    error?: string;
}

export class GetUserSettingsRpcContract {
    static readonly pattern = 'notification.user.settings';
    readonly pattern = GetUserSettingsRpcContract.pattern;
    readonly request: GetUserSettingsRequest;
    readonly response: GetUserSettingsResponse;
}
