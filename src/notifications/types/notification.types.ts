/**
 * Канал отправки уведомления
 */
export enum Channel {
    EMAIL = 'EMAIL',
    SMS = 'SMS',
    TELEGRAM = 'TELEGRAM',
    PUSH = 'PUSH',
}

/**
 * Статус уведомления
 */
export enum NotificationStatus {
    PENDING = 'PENDING',
    SENT = 'SENT',
    FAILED = 'FAILED',
}

/**
 * Приоритет уведомления
 */
export enum NotificationPriority {
    CRITICAL = 'CRITICAL',
    HIGH = 'HIGH',
    NORMAL = 'NORMAL',
    LOW = 'LOW',
}

/**
 * Платформа устройства
 */
export enum DevicePlatform {
    WEB = 'WEB',
    ANDROID = 'ANDROID',
    IOS = 'IOS',
}

/**
 * Уведомление (domain model)
 */
export interface INotification {
    id: string;
    userId: string;
    type: string;
    channel: Channel;
    priority: NotificationPriority;
    subject: string | null;
    message: string;
    payload: Record<string, unknown> | null;
    status: NotificationStatus;
    error: string | null;
    sentAt: string | null;
    createdAt: string;
    updatedAt: string;
}

/**
 * Шаблон уведомления (domain model)
 */
export interface INotificationTemplate {
    id: string;
    type: string;
    channel: Channel;
    subject: string | null;
    body: string;
    variables: string[] | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

/**
 * Настройки уведомлений пользователя (domain model)
 */
export interface IUserNotificationSettings {
    id: string;
    userId: string;
    email: string | null;
    phone: string | null;
    telegramChatId: string | null;
    emailEnabled: boolean;
    smsEnabled: boolean;
    telegramEnabled: boolean;
    pushEnabled: boolean;
    quietHoursStart: number | null;
    quietHoursEnd: number | null;
    timezone: string | null;
    createdAt: string;
    updatedAt: string;
}

/**
 * Устройство пользователя (domain model)
 */
export interface IUserDevice {
    id: string;
    userId: string;
    deviceId: string;
    platform: DevicePlatform;
    name: string | null;
    model: string | null;
    osVersion: string | null;
    appVersion: string | null;
    language: string | null;
    timezone: string | null;
    isActive: boolean;
    lastSeenAt: string;
    createdAt: string;
    updatedAt: string;
}
