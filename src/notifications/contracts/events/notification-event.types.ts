import type { NotificationSentData } from './notification-sent.event';
import type { NotificationFailedData } from './notification-failed.event';

/**
 * Routing keys для событий уведомлений
 */
export enum NotificationEventRoutingKey {
    SENT = 'notification.sent',
    FAILED = 'notification.failed',
}

/**
 * Union type для всех событий уведомлений
 */
export type NotificationEventData =
    | NotificationSentData
    | NotificationFailedData;
