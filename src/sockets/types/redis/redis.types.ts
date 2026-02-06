// Redis Types - общие типы для работы с Redis
import { UserRole } from '../../../types/user-role.enum';
import { UserStatus } from '../user-status.enum';

// Структура данных для online_users (Redis Hash)
export interface OnlineUser {
  status: UserStatus;
  last_seen: number;
  role: UserRole;
}

// Структура для хранения информации о пользователе в Redis
export interface RedisUserData {
  user_id: string;
  status: UserStatus;
  last_seen: number;
  role: UserRole;
}

// Структура для room_connections (Redis Set)
// Хранится как Set строк socket_id
export type RoomConnections = Set<string>;

// Структура для маппинга socket_id -> user_id
export interface SocketUserMapping {
  socket_id: string;
  user_id: string;
  connected_at: number;
}

// Типы для Redis операций
export interface RedisSetOptions {
  ttl?: number; // Time to live в секундах
  nx?: boolean; // Set if not exists
  xx?: boolean; // Set if exists
}

// Структура для pub/sub сообщений
export interface RedisPubSubMessage<T = unknown> {
  event: string;
  data: T;
  timestamp: number;
  sender_instance?: string;
}
