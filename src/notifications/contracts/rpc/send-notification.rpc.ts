import type { SendNotificationDto } from '../../dto/send-notification.dto';

export type SendNotificationSyncRequest = SendNotificationDto;

export interface SendNotificationSyncResponse {
    success: boolean;
    message?: string;
    error?: string;
}

export class SendNotificationSyncRpcContract {
    static readonly pattern = 'notification.send.sync';
    readonly pattern = SendNotificationSyncRpcContract.pattern;
    readonly request: SendNotificationSyncRequest;
    readonly response: SendNotificationSyncResponse;
}
