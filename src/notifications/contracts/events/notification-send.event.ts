import { IBaseEventContract } from '../../../contracts/events/base.event';
import type { SendNotificationDto } from '../../dto/send-notification.dto';

export type NotificationSendData = SendNotificationDto;

export class NotificationSendEventContract implements IBaseEventContract<NotificationSendData> {
    static readonly pattern = 'notification.send';
    readonly pattern = NotificationSendEventContract.pattern;
    readonly data: NotificationSendData;
}
