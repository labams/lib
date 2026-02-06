// User Events Contract - события пользователя для RabbitMQ

// Routing keys для событий пользователя
export enum UserEventRoutingKey {
  ONLINE = 'user.online',
  OFFLINE = 'user.offline',
}

// События для публикации в RabbitMQ
export interface UserOnlineEvent {
  user_id: string;
  timestamp: number;
  role: string;
}

export interface UserOfflineEvent {
  user_id: string;
  timestamp: number;
  last_seen: number;
}

// Union type для всех событий пользователя
export type UserEvent = UserOnlineEvent | UserOfflineEvent;
