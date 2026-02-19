import { IBaseEventContract } from '../../../contracts/events/base.event.';

export interface NotificationFailedData {
    notificationId: string;
    userId: string;
    type: string;
    channel: string;
    error: string;
}

export class NotificationFailedEventContract implements IBaseEventContract<NotificationFailedData> {
    static readonly pattern = 'notification.failed';
    readonly pattern = NotificationFailedEventContract.pattern;
    readonly data: NotificationFailedData;
}
