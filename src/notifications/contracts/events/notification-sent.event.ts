import { IBaseEventContract } from '../../../contracts/events/base.event.';

export interface NotificationSentData {
    notificationId: string;
    userId: string;
    type: string;
    channel: string;
}

export class NotificationSentEventContract implements IBaseEventContract<NotificationSentData> {
    static readonly pattern = 'notification.sent';
    readonly pattern = NotificationSentEventContract.pattern;
    readonly data: NotificationSentData;
}
